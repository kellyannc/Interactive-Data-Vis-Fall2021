 /* CONSTANTS AND GLOBALS */
const width = 600,
  height = 600 ,
  margin = 20;

/* LOAD DATA */
d3.csv('../data/populationOverTime.csv', d => {
  return {
    year: new Date(+d.Year, 0, 1),
    country: d.Entity,
    population: +d.Population
  }
}).then(data => {
  console.log('data :>> ', data);
 
  // SCALES
  const xScale = d3.scaleTime()
  .domain(d3.extent(data, d => d.year))
  .range ([margin, width - margin])

  const yScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.population))
  .range([height - margin, margin])

  // CREATE SVG ELEMENT
const svg = d3.select("#container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

  // BUILD AND CALL AXES

  // LINE GENERATOR FUNCTION

  const lineGen = d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.population))

    const countries = d3.groups(data, d => d.country).map(([key, data]) => data)
      // console.log('countries :>> ', countries);
      // // // console.log(countries)
      // // // console.log(countries.get("Afghanistan"))


  // DRAW LINE

svg.selectAll(".trend")
  .data(countries)
  .join("path")
  .attr("class", "trend")
  .attr("stroke", "black")
  .attr("fill", "none")
  .attr("d", d => lineGen(d))

});