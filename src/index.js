import './styles/index.scss';
import income from "../income"

(function() {
  var width = 1500;
  var height = 800;

  var svg = d3.select("body") 
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)")
    // debugger 
    console.log(income) 
  
  var defs = svg.append("defs");

  defs.append("pattern")
    .attr("id", "saitama")
    .attr("height", "100%")
    .attr("width", "100%")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
    .attr("height", 1)
    .attr("width", 1)
    .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
    .attr("xlink:href", "./src/images/saitama.jpg")




  var simulation = d3.forceSimulation()
    .force("x", d3.forceX(width/2).strength(0.05)) // move to svg width center x
    .force("y", d3.forceY(height/2).strength(0.05)) // move to svg height center y
    .force("collide", d3.forceCollide(function(d) { 
      var formatted = ((d.Monthly.replace("$", ""))) 
      formatted = Number((formatted.replace(",", "")))
      // console.log(d.Monthly, formatted)
      return radiusScale(formatted/10); 
    })) // makes sure circles dont overlap. Input the larget radius
  var radiusScale = d3.scaleSqrt().domain([3,1500]).range([10,70]) // domain refers to thousands (dollars) 



  d3.queue()
    .defer(d3.csv, "income.csv")
    .await(ready) 


  function ready (error, datapoints) {
      var circles = svg.selectAll(".country")
        .data(datapoints)
        .enter().append("circle")
        .attr("class", "country")
        .attr("r", function(d) {
          // console.log(d.Monthly.slice)
          var formatted = ((d.Monthly.replace("$", ""))) 
          formatted = Number((formatted.replace(",", "")))
              return radiusScale(formatted/10); 
        }) 
        .attr("fill", "black")
        .style("opacity", .2) 
        .on("click", function(d){
          console.log(d)   // refactor to open a modal with the country of choice 
        })
        // .attr("stroke", "black")
        
      // d3.select("#income-field").on()    
    

    // input field event handling.
      


        simulation.nodes(datapoints) //nodes refers to each circle 
          .on('tick', ticked)
        function ticked() { //magic boilerplate.... 
          circles
            .attr("cx", function(d) {
              return d.x
            })
            .attr("cy", function(d) {
              return d.y 
            } )
        }


      
        var input = document.getElementsByClassName("input-field");
         
        input[0].addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            console.log(input[0].value)
            input[0].value = "" 
          }
        });



  }

})();















