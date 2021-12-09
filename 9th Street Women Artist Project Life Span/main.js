

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

 const colorscale = d3.scaleOrdinal()
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
 .style("stroke", d => colorscale(d.Artist))

 svg.append("g")
 .attr("class", "x-axis")
 .style("transform", 'translate(0px,${height - margin}px)')
 .call(d3.axisBottom(xScale))

 svg.append("g")
 .attr("class", "y-axis")
 .style("transform", 'translate(0px,0px)')
 .call(d3.axisRight(yScale))



});