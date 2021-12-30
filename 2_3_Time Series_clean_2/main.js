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
d3.csv('../data/august_senate_polls_sort.csv', d => {
// use custom initializer to reformat the data the way we want it
// ref: https://github.com/d3/d3-fetch#dsv
return {
  Year: new Date(d.cycle),
  USstate: d.state,
  Democratic: +d.DEM_poll
}
}).then(data => {
console.log('data :>> ', data);

// + SCALES
const xScale = d3.scaleTime()
  .domain(d3.extent(data, d => d.Year))
  .range([margin.right, width - margin.left])

const yScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.Democratic))
  .range([height - margin.bottom, margin.top])

// CREATE SVG ELEMENT
const svg = d3.select("#container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

  const colorScale = d3.scaleOrdinal()
.domain(["AK","AL","AR","AZ","CA","CO","CT"])
.range(["red","yellow","purple","orange","pink","black","grey"])

// BUILD AND CALL AXES
const xAxis = d3.axisBottom(xScale)
  .ticks(6) // limit the number of tick marks showing -- note: this is approximate

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
  .attr("class", 'yLabel')
  .attr("transform", `translate(${-45}, ${height / 2})`)
  .attr("writing-mode", 'vertical-rl')
  .text("Democratic")

// LINE GENERATOR FUNCTION
const lineGen = d3.line()
  .x(d => xScale(d.Year))
  .y(d => yScale(d.Democratic))

const allstates = d3.groups(data, d => d.USstate).map(([key, data]) => data)
// const allstates = d3.groups(data, d => d.USstate).map(([key, data]) => data.sort(d3.ascending))

// DRAW LINE


svg.selectAll(".line")
  .data(allstates) // data needs to take an []
  .join("path")
  .attr("class", 'line')
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("d", d => lineGen(d))
  // .sort((allstates) => d3.ascending(d.Year))
  .attr("stroke", d => colorScale(d))
  .style("stroke-width", 3)

});
 
 
 
 
 