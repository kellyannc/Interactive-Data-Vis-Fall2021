//   /* CONSTANTS AND GLOBALS */
// const width = window.innerWidth * 0.7,
// height = window.innerHeight * 0.7,
// margin = { top: 20, bottom: 50, left: 60, right: 60 }

// /*
// this extrapolated function allows us to replace the "G" with "B" min the case of billions.
// we cannot do this in the .tickFormat() because we need to pass a function as an argument,
// and replace needs to act on the text (result of the function).
// */
// const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')
// const formatDate = d3.timeFormat("%Y")

// /* LOAD DATA */
// d3.csv('../data/populationOverTime.csv', d => {
// // use custom initializer to reformat the data the way we want it
// // ref: https://github.com/d3/d3-fetch#dsv
// return {
//   year: new Date(+d.Year, 0, 1),
//   country: d.Entity,
//   population: +d.Population
// }
// }).then(data => {
// console.log('data :>> ', data);

// // + SCALES
// const xScale = d3.scaleTime()
//   .domain(d3.extent(data, d => d.year))
//   .range([margin.right, width - margin.left])

// const yScale = d3.scaleLinear()
//   .domain(d3.extent(data, d => d.population))
//   .range([height - margin.bottom, margin.top])

// // CREATE SVG ELEMENT
// const svg = d3.select("#container")
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height)

// // BUILD AND CALL AXES
// const xAxis = d3.axisBottom(xScale)
//   .ticks(6) // limit the number of tick marks showing -- note: this is approximate

// const xAxisGroup = svg.append("g")
//   .attr("class", "xAxis")
//   .attr("transform", `translate(${0}, ${height - margin.bottom})`)
//   .call(xAxis)

// xAxisGroup.append("text")
//   .attr("class", 'xLabel')
//   .attr("transform", `translate(${width / 2}, ${35})`)
//   .text("Year")

// const yAxis = d3.axisLeft(yScale)
//   .tickFormat(formatBillions)

// const yAxisGroup = svg.append("g")
//   .attr("class", "yAxis")
//   .attr("transform", `translate(${margin.right}, ${0})`)
//   .call(yAxis)

// yAxisGroup.append("text")
//   .attr("class", 'yLabel')
//   .attr("transform", `translate(${-45}, ${height / 2})`)
//   .attr("writing-mode", 'vertical-rl')
//   .text("Population")

// // LINE GENERATOR FUNCTION
// const lineGen = d3.line()
//   .x(d => xScale(d.year))
//   .y(d => yScale(d.population))

// // DRAW LINE
// svg.selectAll(".line")
//   .data([data]) // data needs to take an []
//   .join("path")
//   .attr("class", 'line')
//   .attr("fill", "none")
//   .attr("stroke", "blue")
//   .attr("d", d => lineGen(d))

// });
 
 
 /* CONSTANTS AND GLOBALS */
 const width = window.innerWidth * 0.7,
 height = window.innerHeight * 0.7,
 margin = { top: 20, bottom: 50, left: 60, right: 60 }

/*
this extrapolated function allows us to replace the "G" with "B" min the case of billions.
we cannot do this in the .tickFormat() because we need to pass a function as an argument,
and replace needs to act on the text (result of the function).
*/
const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')
const formatDate = d3.timeFormat("%Y")

/* LOAD DATA */
d3.csv('../data/US_Covid_overtime_Northeast_4_sort.csv', d => {
 // use custom initializer to reformat the data the way we want it
 // ref: https://github.com/d3/d3-fetch#dsv
 return {
  dates: new Date(d.date),
  states: d.state,
  totaldeaths: +d.totdeath
 }
}).then(data => {
 console.log('data :>> ', data);

 // + SCALES
 const xScale = d3.scaleTime()
   .domain(d3.extent(data, d => d.dates))
   .range([margin.right, width - margin.left])

 const yScale = d3.scaleLinear()
   .domain(d3.extent(data, d => d.totaldeaths))
   .range([height - margin.bottom, margin.top])

 // CREATE SVG ELEMENT
 const svg = d3.select("#container")
   .append("svg")
   .attr("width", width)
   .attr("height", height)
   
  //  .style('font-size', '100px')        
  //  .style('color', 'rgb(40, 56, 148)')            
  //  .style('text-align', 'right')    
  //  .style('left-padding', '50px')  

 // BUILD AND CALL AXES
 const xAxis = d3.axisBottom(xScale)
   .ticks(10) // limit the number of tick marks showing -- note: this is approximate

 const xAxisGroup = svg.append("g")
   .attr("class", "xAxis")
   .attr("transform", `translate(${0}, ${height - margin.bottom})`)
   .call(xAxis)

 xAxisGroup.append("text")
   .attr("class", 'xLabel')
   .attr("transform", `translate(${width / 2}, ${35})`)
   .text("Year")

 const yAxis = d3.axisLeft(yScale)
   .tickFormat(formatBillions)

 const yAxisGroup = svg.append("g")
   .attr("class", "yAxis")
   .attr("transform", `translate(${margin.right}, ${0})`)
   .call(yAxis)

 yAxisGroup.append("text")
   .attr("class", "yLabel")
   .attr("transform", `translate(${-45}, ${height / 2})`)
  //  .attr("writing-mode", 'vertical-rl')
   .text("Population")


   const colorScale = d3.scaleOrdinal()
// .domain(["CT", "DC", "DE", "MD", "MA", "ME",  "NH", "NJ", "NY", "NYC", "RI", "VT"])
.domain([data, d => d.states])
.range(["red", "blue", "pink", "purple", "yellow", "orange", "green", "aqua"])

  // const usstates = d3.groups(data, d => d.states).map(([key, data]) => data.sort(d3.ascending(data, d => d.dates).map))
  //  const usstates = d3.groups(data, d => d.states).map(([key, data]) => data.sort((a, b) => d3.ascending(a.dates, b.dates)))
   const usstates = d3.groups(data, d => d.states).map(([key, data]) => data.sort((a, b) => d3.ascending(a.dates, b.dates)))
  // const usstates = d3.groups(data, d => d.states).map(([key, data]) =d> ata)
  console.log('usstates :>> ', usstates)

 // LINE GENERATOR FUNCTION
 const lineGen = d3.line()
   .x(d => xScale(d.dates))
   .y(d => yScale(d.totaldeaths))

   
// const usstates = d3.groups(data, d => d.states).map(([key, data]) => data)

// console.log('usstates :>> ', usstates)
// console.log(usstates)
// console.log(usstates.get("NY"))

 // DRAW LINE
 svg.selectAll(".line")
   .data(usstates) // data needs to take an []
   .join("path")
   .attr("class", 'line')
   .attr("fill", "none")
   .attr("stroke", "black")
   .attr("d", d => lineGen(d))
  //  .sort((usstates) => d3.ascending(d.dates))
  .attr("stroke", d => colorScale(d))
  .style("stroke-width", 5)

});