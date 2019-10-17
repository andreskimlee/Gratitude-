import './styles/index.scss';
import income from "../income"

(function() {
  var width = 1500;
  var height = 765;

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
      var circles = svg.selectAll(".country").data(datapoints)
        .enter().append("circle")
        .attr("class", "country")
        .attr("r", function(d) {
          var formatted = ((d.Monthly.replace("$", ""))) 
          formatted = Number((formatted.replace(",", "")))
              return radiusScale(formatted/20); 
        }) 
        .attr("fill", "black")
        .style("opacity", .3) 
        .on("click", function(d){
          console.log(d) 
        })
      
        simulation.nodes(datapoints) 
          .on('tick', ticked)
        debugger 


        function ticked() { //magic boilerplate.... 
          circles
            .attr("cx", function(d) {
              return d.x
            })
            .attr("cy", function(d) {
              return d.y 
            } )
        }

        var forceX = d3.forceX(function(d) {
          var formatted = ((d.Monthly.replace("$", ""))) 
          formatted = Number((formatted.replace(",", "")))
          if (formatted > 4000) {

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
            circles.enter().append("circle")
              .attr("r", 5) 
              .attr("fill", "white")
            datapoints.push({Monthly: "10000"})
            console.log(datapoints)
            simulation.nodes(datapoints) 
              .on('tick', ticked)
            
            


          
          //   simulation.nodes(datapoints) 
          // .on('tick', ticked)


            // svg.selectAll(".country")
            //   .enter()
            //   .append("circle")
            //   .attr("r", 5)
            //   .attr("fill", "white")
            input[0].value = ""
            simulation.restart() 
            generateLessGreaterText() //not important
            simulation.force("x", forceX).alphaTarget(0.4).restart() 
            
          }
        });


        function generateLessGreaterText () {
          d3.select("body").append("text")
              .text("Less")
              .attr("class", "lesser")
              d3.select("body").append("text")
              .text("Greater")
              .attr("class", "greater")
        }

  }

})();











