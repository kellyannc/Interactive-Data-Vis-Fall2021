
// 9th Street Artist 
  /* CONSTANTS AND GLOBALS */
  const width = 600,
  height = 600,
  margin = 20,
  radius =5;
  
  /* LOAD DATA */
d3.csv('../data/9thStWomenArtistCombo.csv', d3.autoType)
.then(data => {

  
    const svg = d3.select("#container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "grey")
  
    /* SCALES */
  
    const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Height))
    .range([width - margin, margin])
    .nice()
  
    const yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Width))
    .range([height - margin, margin])
    .nice()
  
    // console.log('yScale.domain():>>', yScale.domain());
  
    const colorscale = d3.scaleOrdinal()
    .domain(["Illustrated Book", "Drawing", "Print", "Painting"])
    .range(["red", "white", "purple", "orange", "pink"])
    
    /* HTML ELEMENTS */
  
    svg.selectAll(".dot")
    .data(data)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.Height))
    .attr("cy", d => yScale(d.Width))
    .attr("r", radius)
    .style("fill", d => colorscale(d.Classification))
  
    svg.append("g")
      .attr("class", "x-axis")
      .style("transform", 'translate(0px,${margin - width}px)')
      .call(d3.axisBottom(xScale))
  
      svg.append("g")
      .attr("class", "y-axis")
      .style("transform", 'translate(0px, 0px)')
      .call(d3.axisLeft(yScale))

  });










// //HomeWork _ using new dataset file
// /* CONSTANTS AND GLOBALS */
// const width = 800
//   height = 600,
//   margin = 12,
//   radius =10;

// /* LOAD DATA */
// d3.csv('../data/happiness.csv', d3.autoType)
//   .then(research => {
//     // console.log(research)

//     const svg = d3.select("#container")
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .style("background-color", "pink")
//       // .style('border', '10px white') 
//       // .style('font-size', '100px')        
//       // .style('color', 'red')            
//       // .style('text-align', 'right')    
//       // .style('left-padding', '5px') 

//     /* SCALES */

//     const xScale = d3.scaleLinear()
//     .domain(d3.extent(research, d => d.Country))
//     .range([margin, width - margin])
//     // .nice()
  
//     const yScale = d3.scaleLinear()
//     .domain(d3.extent(research, d => d.Mean))
//     .range([height - margin, margin])
//     // .nice()

//     // // console.log('Scale.domain():>>', yScale.domain());
//     // console.log('xScale.domain():>>', xScale.domain());
//     // // console.log('yScale.domain():>>', yScale.domain());

//     const colorscale = d3.scaleOrdinal()
//     .domain(["Male", "Female", "Both"])
//     .range(["yellow", "Purple", "White"])
    
//     /* HTML ELEMENTS */

//     svg.selectAll(".dot")
//     .data(research)
//     .join("circle")
//     .attr("class", "dot")
//     .attr("cx", d => xScale(d.Country))
//     .attr("cy", d => yScale(d.Mean))
//     .attr("r", radius)
//     .style("fill", d => colorscale(d.Gender))

//     svg.append("g")
//       .attr("class", "x-axis")
//       .style("transform", 'translate(0px,${height - margin}px)')
//       .call(d3.axisBottom(xScale))

//       svg.append("g")
//       .attr("class", "y-axis")
//       .style("transform", 'translate(0px,0px)')
//       .call(d3.axisRight(yScale))
//   });


// //   tutorial II

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
//   .join(enter => enter
//     .append("circle")
//     .style("fill", "black")
//     .attr("r", 0)
//     .call(enter => enter.transition()
//     .delay((d, i) => xScale(d.ideologyScore2020 * 50)) //dots moves left to right on screen 
//     // .delay((d, i) => i * 500)
//     .duration(500)
//     .attr("r", radius)
//     .style("fill", d => colorscale(d.Party))
//     )
//   )

//   .attr("class", "dot")
//   .attr("cx", d => xScale(d.ideologyScore2020))
//   .attr("cy", d => yScale(d.envScore2020))
 

//   svg.append("g")
//     .attr("class", "x-axis")
//     .style("transform", 'translate(0px,${margin - height}px)')
//     .call(d3.axisBottom(xScale))

//     svg.append("g")
//     .attr("class", "y-axis")
//     .style("transform", 'translate(0px,0px)')
//     .call(d3.axisRight(yScale))

// });

// Tutorial 1


//   /* CONSTANTS AND GLOBALS */
//   const width = 600,
//   height = 600,
//   margin = 40,
//   radius =5;
  
//   /* LOAD DATA */
//   d3.json("../data/environmentRatings.json", d3.autoType)
//   .then(scores => {
//     console.log(scores)
  
//     const svg = d3.select("#container")
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       .style("background-color", "pink")
  
//     /* SCALES */
  
//     const xScale = d3.scaleLinear()
//     .domain(d3.extent(scores, d => d.ideologyScore2020))
//     .range([margin, width - margin])
//     .nice()
  
//     const yScale = d3.scaleLinear()
//     .domain(d3.extent(scores, d => d.envScore2020))
//     .range([height - margin, margin])
//     .nice()
  
//     // console.log('yScale.domain():>>', yScale.domain());
  
//     const colorscale = d3.scaleOrdinal()
//     .domain(["R", "D", "I"])
//     .range(["red", "blue", "purple"])
    
//     /* HTML ELEMENTS */
  
//     svg.selectAll(".dot")
//     .data(scores)
//     .join("circle")
//     .attr("class", "dot")
//     .attr("cx", d => xScale(d.ideologyScore2020))
//     .attr("cy", d => yScale(d.envScore2020))
//     .attr("r", radius)
//     .style("fill", d => colorscale(d.Party))
  
//     svg.append("g")
//       .attr("class", "x-axis")
//       .style("transform", 'translate(0px,${margin - height}px)')
//       .call(d3.axisBottom(xScale))
  
//       svg.append("g")
//       .attr("class", "y-axis")
//       .style("transform", 'translate(0px,0px)')
//       .call(d3.axisRight(yScale))
  
//   });