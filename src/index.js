import './styles/index.scss';
import income from "../income"

(function() {
  var width = 1500;
  var height = 765;
  var angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

  var svg = d3.select("body") 
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")
  

  var simulation = d3.forceSimulation() 
    .force("x", d3.forceX(width/2).strength(0.05)) 
    .force("y", d3.forceY(height/2).strength(0.05)) 
    .force("collide", d3.forceCollide(function(d) { 
      var formatted = ((d.Monthly.replace("$", ""))) 
      formatted = Number((formatted.replace(",", "")))
      return radiusScale(formatted/14); 
    }))

    
    
  var radiusScale = d3.scaleSqrt().domain([3,1500]).range([10,90]) // domain refers to thousands (dollars) 

  d3.queue()
    .defer(d3.csv, "income.csv")
    .await(ready) 
  

  function ready (error, datapoints) {
      debugger 
      var circles = svg.selectAll(".country").data(datapoints)
        .enter()
        .append("circle")
        .attr("class", "countries")
        .attr("r", function(d) {
          var formatted = ((d.Monthly.replace("$", ""))) 
          formatted = Number((formatted.replace(",", "")))
              return radiusScale(formatted/20); 
        }) 
        .attr("fill", "black")
        .style("opacity", .3) 
        .on("mouseover", function(d){
          d3.select("body").append("text")
          .html(`${d.Country} <br> $${d.Monthly}`).attr("class", "country-text")
         })
         .on("mouseout", function(d){
          d3.select(".country-text").remove()
         })
        
        
        
        simulation.nodes(datapoints) 
          .on('tick', ticked)
        // debugger 


        function ticked() { //magic boilerplate.... 
          svg.selectAll('.countries')
            .attr("cx", function(d) {
              // debugger 
              return d.x
            })
            .attr("cy", function(d) {
              // debugger
              return d.y 
            } )
        }

        



        var forceX = d3.forceX(function(d) {
          var formatted = ((d.Monthly.replace("$", ""))) 
          formatted = Number((formatted.replace(",", "")))
          debugger 
          if (formatted < input[0].value) {
              return 1000 
          } else {
            return 500
          } 
        })

        d3.select(".combine-button")
          .on("click", function(d) { 
            simulation.force("x", d3.forceX(width/2).strength(.05)) 
            simulation.force("y", d3.forceY(height/2).strength(.05)) 
          })

          d3.select(".title")
          .on("click", function(d) {
            simulation.force("x", d3.forceX(width/2).strength(1)) 
            simulation.force("y", d3.forceY(height/2).strength(1)) 
          })



        var input = document.getElementsByClassName("input-field");
        input[0].addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            datapoints.push({Country: "user", Monthly: `${input[0].value}`})
             svg.selectAll(".countries")
             .data(datapoints)
             .enter()
             .append("circle")
             .attr("class", `countries`)
             .attr("r", function(d) {
               var formatted = ((d.Monthly.replace("$", ""))) 
               formatted = Number((formatted.replace(",", "")))
                   return radiusScale(formatted/20);       
             }) 
             .attr("fill", function(d) {
               if (d.Country === "user") {
                 return "white" 
               } else {
                 return "black" 
               }
             })
             .style("opacity", .3) 
            simulation.nodes(datapoints) 
              .on('tick', ticked)
            simulation.restart(); 
            generateLessGreaterText() //not important
            simulation.force("x", forceX).alphaTarget(0.6)
            input[0].value = ""
             
          }
        });


        function generateLessGreaterText () {
          d3.select("body").append("text")
              .text(`You're better off than ${percentRank(Number(input[0].value))}% of the world`)
              .attr("class", "lesser")
              console.log(percentRank(Number(input[0].value)))
        }

        function percentRank(n) {
          var array = [] 
          datapoints.forEach (country => {
            var formatted = ((country.Monthly.replace("$", ""))) 
            formatted = Number((formatted.replace(",", "")))
            array.push(formatted) 
          })
          debugger 
          var L = 0;
          var S = 0;
          var N = array.length
      
          for (var i = 0; i < array.length; i++) {
              if (array[i] < n) {
                  L += 1
              } else if (array[i] === n) {
                  S += 1
              } else {
      
              }
          }
      
          var pct = (L + (0.5 * S)) / N
      
          return Math.floor(pct * 100) 
      }

  }

})();











