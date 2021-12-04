/* CONSTANTS AND GLOBALS */
const width = 800
  height = 600,
  margin = 60,
  radius =5;

/* LOAD DATA */
d3.csv('../data/happiness.csv', d3.autoType)
  .then(research => {
    // console.log(research)

    const svg = d3.select("#container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "pink")
      .style('border', '10px white') 
      .style('font-size', '100px')        
      .style('color', 'red')            
      .style('text-align', 'right')    
      .style('left-padding', '5px') 

    /* SCALES */

    const xScale = d3.scaleLinear()
    .domain(d3.extent(research, d => d.Country))
    .range([margin, width - margin])
  
    const yScale = d3.scaleLinear()
    .domain(d3.extent(research, d => d.Mean))
    .range([height - margin, margin])

    // console.log('yScale.domain():>>', yScale.domain());

    const colorscale = d3.scaleOrdinal()
    .domain(["Male", "Female"])
    .range(["yellow", "Purple"])
    
    /* HTML ELEMENTS */

    svg.selectAll(".dot")
    .data(research)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.Country))
    .attr("cy", d => yScale(d.Mean))
    .attr("r", radius)
    .style("fill", d => colorscale(d.Gender))

    svg.append("g")
      .attr("class", "x-axis")
      .style("transform", '0px,${margin - height}px)')
      .call(d3.axisBottom(xScale))

      svg.append("g")
      .attr("class", "y-axis")
      .style("transform", 'translate(0px,0px)')
      .call(d3.axisRight(yScale))
  });


//   tutorial

//   /* CONSTANTS AND GLOBALS */
// const width = 600,
// height = 600,
// margin = 40,
// radius =5;

// /* LOAD DATA */
// d3.json("../data/environmentRatings.json", d3.autoType)
// .then(scores => {
//   console.log(scores)

//   const svg = d3.select("#container")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .style("background-color", "pink")

//   /* SCALES */

//   const xScale = d3.scaleLinear()
//   .domain(d3.extent(scores, d => d.ideologyScore2020))
//   .range([margin, width - margin])
//   .nice()

//   const yScale = d3.scaleLinear()
//   .domain(d3.extent(scores, d => d.envScore2020))
//   .range([height - margin, margin])
//   .nice()

//   // console.log('yScale.domain():>>', yScale.domain());

//   const colorscale = d3.scaleOrdinal()
//   .domain(["R", "D", "I"])
//   .range(["red", "blue", "purple"])
  
//   /* HTML ELEMENTS */

//   svg.selectAll(".dot")
//   .data(scores)
//   .join("circle")
//   .attr("class", "dot")
//   .attr("cx", d => xScale(d.ideologyScore2020))
//   .attr("cy", d => yScale(d.envScore2020))
//   .attr("r", radius)
//   .style("fill", d => colorscale(d.Party))

//   svg.append("g")
//     .attr("class", "x-axis")
//     .style("transform", 'translate(0px,${margin - height}px)')
//     .call(d3.axisBottom(xScale))

//     svg.append("g")
//     .attr("class", "y-axis")
//     .style("transform", 'translate(0px,0px)')
//     .call(d3.axisRight(yScale))

// });