import './styles/index.scss';
import income from "../income"

(function() {
  var width = 1500;
  var height = 650;

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
    .force("x", d3.forceX(width/2).strength(0.1)) // move to svg width center x
    .force("y", d3.forceY(height/2).strength(0.1)) // move to svg height center y
    .force("collide", d3.forceCollide(function(d) { 
      var formatted = ((d.Monthly.replace("$", ""))) 
      formatted = Number((formatted.replace(",", "")))
      // console.log(d.Monthly, formatted)
      return radiusScale(formatted/11); 
    })) // makes sure circles dont overlap. Input the larget radius
  var radiusScale = d3.scaleSqrt().domain([3,1500]).range([10,80]) // domain refers to thousands (dollars) 



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
        .attr("fill", "url(#saitama)")
        .on("click", function(d){
          console.log(d)   // refactor to open a modal with the country of choice 
        })
        .attr("stroke", "black")
        
        

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


      




  }
  
})();













// function createBubbleChart(errors, income) {
//   return d3.select("body").append("svg")
// }

// const generateRandomPositions = () => {
//   const positions = [] 

//   for (let i = 0; i< 20; i++) {
//     positions[i] = {
//       cx: Math.floor(Math.random() * 400),
//       cy: Math.floor(Math.random() * 300),
//       r: Math.floor(Math.random() * 100)
//     }
//   }
//   return positions 
// }

// var svg = d3.select("body")
//   .append("svg")


// const circle = svg
//   .selectAll("circle")
//   .data(generateRandomPositions())
//   .enter()
//   .append("circle")
//   .attr('cx', d => d.cx)
//   .attr('cy', d => d.cy)
//   .attr("r", d => d.r)
//   .attr("fill", "url(#saitama)")


// var defs = svg.append("defs") 
// defs.append("pattern")
//     .attr("id", "saitama")
//     .attr("height", "100%")
//     .attr("width", "100%")
//     .attr("patternContentUnits", "objectBoundingBox")
//     .append("image")
//     .attr("height", 1)
//     .attr("width", 1)
//     .attr("preserveAspectRatio", "none")
//     .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
//     .attr("xlink:href", "./src/images/saitama.jpg");

// svg.attr("height", 1000)
// svg.attr("width", 1000) 

// var circles = svg.append("circle")
//   .attr("class", "saitama")
//   .attr("fill", "url(#saitama)")
//   .attr("r", 50)
//   .attr("cx", 50)
//   .attr("cy", 100)

// var circle2 = svg.append("circle")
//   .attr("class", "abc")
//   .attr("fill", "black")
//   .attr("r", 50)
//   .attr("cx", 400)
//   .attr("cy", 400)