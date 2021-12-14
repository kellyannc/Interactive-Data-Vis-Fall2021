

/* CONSTANTS AND GLOBALS */
 const width = 600,
 height = 600 ,
 margin = 20;


/* LOAD DATA */
d3.csv('../data/Women_simplfied.csv', d => {
 return {
   Born: new Date(+d.Birth, 0, 1),
   Artistnames: +d.Artist,
   Die: +d.Death,
   
 }
}).then(data => {
 console.log('data :>> ', data);

 // SCALES
 const xScale = d3.scaleTime()
 .domain(d3.extent(data, d => d.Born))
 .range ([margin, width - margin])

 const yScale = d3.scaleLinear()
 .domain(d3.extent(data, d => d.Die))
 .range([height - margin, margin])

 const colorScale = d3.scaleOrdinal()
 .domain(["Elaine de Kooning", "Helen Frankenthaler", "Grace Hartigan", "Joan Mitchell", "Lee Krasner"])
 .range(["red", "orange", "purple", "orange", "green"])

 // CREATE SVG ELEMENT
const svg = d3.select("#container")
 .append("svg")
 .attr("width", width)
 .attr("height", height)
 .style('color', 'rgb(40, 56, 148)')  

 // BUILD AND CALL AXES

 // LINE GENERATOR FUNCTION

 const lineGen = d3.line()
   .x(d => xScale(d.Born))
   .y(d => yScale(d.Die))

   const Artists = d3.groups(data, d => d.Artistnames).map(([key, data]) => data)

 // DRAW LINE

svg.selectAll(".trend")
 .data(Artists)
 .join("path")
 .attr("class", "trend")
 .attr("stroke", "black")
 .attr("fill", "none")
 .attr("d", d => lineGen(d))
 .style("stroke", d => colorScale(d.Artist))

 svg.append("g")
 .attr("class", "x-axis")
 .style("transform", 'translate(0px,${height - margin}px)')
 .call(d3.axisBottom(xScale))

 svg.append("g")
 .attr("class", "y-axis")
 .style("transform", 'translate(0px,0px)')
 .call(d3.axisRight(yScale))



});




//  /* CONSTANTS AND GLOBALS */
//  const width = 600,
//  height = 600 ,
//  margin = 20;
// //  const width = window.innerWidth * 0.7,
// //  height = window.innerHeight * 0.7,
// //  margin = { top: 20, bottom: 50, left: 60, right: 60 }

// //  const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')
// // const formatDate = d3.timeFormat("%Y")

// /* LOAD DATA */
// d3.csv('../data/Women_simplfied.csv', d => {
//  return {
//   Born: new Date(+d.Birth, 0, 1),
//    Artistnames: d.Artist,
//    Die: new Date(+d.Death, 0, 1),
   
//  }
// }).then(data => {
//  console.log('data :>> ', data);

//  // SCALES
//  const xScale = d3.scaleTime()
//  .domain(d3.extent(data, d => d.Born))
//  .range ([margin, width - margin])
// //  .domain(d3.extent(data, d => d.Born))
// //  .range([margin.right, width - margin.left])

//  const yScale = d3.scaleLinear()
//  .domain(d3.extent(data, d => d.Die))
//  .range([height - margin, margin])
// //  .domain(d3.extent(data, d => d.Die))
// //  .range([height - margin.bottom, margin.top])

//  const colorscale = d3.scaleOrdinal()
//  .domain(["Elaine de Kooning", "Helen Frankenthaler", "Grace Hartigan", "Joan Mitchell", "Lee Krasner"])
//  .range(["red", "orange", "purple", "orange", "green"])

//  // CREATE SVG ELEMENT
// const svg = d3.select("#container")
//  .append("svg")
//  .attr("width", width)
//  .attr("height", height)
//  .style('color', 'rgb(40, 56, 148)')  

//  // BUILD AND CALL AXES
//  const xAxis = d3.axisBottom(xScale)
//  .ticks(10) // limit the number of tick marks showing -- note: this is approximate

// const xAxisGroup = svg.append("g")
//  .attr("class", "xAxis")
//  .attr("transform", `translate(${0}, ${height - margin.bottom})`)
//  .call(xAxis)

// xAxisGroup.append("text")
//  .attr("class", 'xLabel')
//  .attr("transform", `translate(${width / 2}, ${35})`)
//  .text("Year")

// const yAxis = d3.axisLeft(yScale)
//  .tickFormat(formatBillions)

// const yAxisGroup = svg.append("g")
//  .attr("class", "yAxis")
//  .attr("transform", `translate(${margin.right}, ${0})`)
//  .call(yAxis)

// yAxisGroup.append("text")
//  .attr("class", "yLabel")
//  .attr("transform", `translate(${-45}, ${height / 2})`)
// //  .attr("writing-mode", 'vertical-rl')
//  .text("Population")

//  // LINE GENERATOR FUNCTION

//  const lineGen = d3.line()
//    .x(d => xScale(d.Born))
//    .y(d => yScale(d.Die))

//    const Artists = d3.groups(data, d => d.Artistnames).map(([key, data]) => data)

//  // DRAW LINE

// svg.selectAll(".trend")
//  .data(Artists)
//  .join("path")
//  .attr("class", "trend")
//  .attr("stroke", "black")
//  .attr("fill", "none")
//  .attr("d", d => lineGen(d))
//  .style("stroke", d => colorscale(d.Artist))

//  svg.append("g")
//  .attr("class", "xaxis")
//  .style("transform", 'translate(0px,${height - margin}px)')
//  .call(d3.axisBottom(xScale))

//  svg.append("g")
//  .attr("class", "yaxis")
//  .style("transform", 'translate(0px,0px)')
//  .call(d3.axisRight(yScale))

// });