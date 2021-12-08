 
//  (9th Street women artist graph) 
 /* CONSTANTS AND GLOBALS */
const width = 800,
  height = 600 ,
  margin = 20;

/* LOAD DATA */
 d3.csv('../data/9thStWomenArtistCombo.csv', d => {
    return {
      artworkdate: new Date(d.Date, 0, 1),
      Artistname: d.Artist,
      artworkcount: +d.moma
 }
}).then(data => {
 console.log('data :>> ', data);
 
  // SCALES
  const xScale = d3.scaleTime()
  .domain(d3.extent(data, d => d.artworkdate))
  .range ([margin, width - margin])

  const yScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d.artworkcount))
  .range([height - margin, margin])

  // CREATE SVG ELEMENT
const svg = d3.select("#container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)

  // BUILD AND CALL AXES

  // LINE GENERATOR FUNCTION

  const lineGen = d3.line()
    .x(d => xScale(d.artworkdate))
    .y(d => yScale(d.artworkcount))

    const artworksatmoma = d3.groups(data, d => d.Artistname).map(([key, data]) => data)
      // console.log('countries :>> ', countries);
      // // // console.log(countries)
      // // // console.log(countries.get("Afghanistan"))


  // DRAW LINE


  const colorscale = d3.scaleOrdinal()
  .domain(["Elaine de Kooning", "Grace Hartigan", "Helen Frankenthaler", "Joan Mitchell", "Lee Krasner"])
  .range(["red", "purple", "pink", "blue", "green"])

svg.selectAll(".trend")
  .data(artworksatmoma)
  .join("path")
  .attr("class", "trend")
  // .attr("stroke", "black")
  .attr("fill", "none")
  .attr("d", d => lineGen(d))
  .style("stroke", d => colorscale(d.Artistname))

  svg.append("g")
  .attr("class", "x-axis")
  .style("transform", 'translate(0px,${height - margin}px)')
  .call(d3.axisBottom(xScale))

  svg.append("g")
  .attr("class", "y-axis")
  .style("transform", 'translate(0px,0px)')
  .call(d3.axisRight(yScale))

});


// //  Homework 
//  /* CONSTANTS AND GLOBALS */
// const width = 800,
//   height = 600 ,
//   margin = 20;

// /* LOAD DATA */
//  d3.csv('../data/US_Covid_overtime.csv', d => {
//     return {
//       inddate: new Date(d.date),
//       usstate: d.state,
//       cases: +d.totalcases
//  }
// }).then(data => {
//  console.log('data :>> ', data);
 
//   // SCALES
//   const xScale = d3.scaleTime()
//   .domain(d3.extent(data, d => d.inddate))
//   .range ([margin, width - margin])

//   const yScale = d3.scaleLinear()
//   .domain(d3.extent(data, d => d.cases))
//   .range([height - margin, margin])

//   // CREATE SVG ELEMENT
// const svg = d3.select("#container")
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height)

//   // BUILD AND CALL AXES

//   // LINE GENERATOR FUNCTION

//   const lineGen = d3.line()
//     .x(d => xScale(d.inddate))
//     .y(d => yScale(d.cases))

//     const states = d3.groups(data, d => d.usstate).map(([key, data]) => data)
//       // console.log('countries :>> ', countries);
//       // // // console.log(countries)
//       // // // console.log(countries.get("Afghanistan"))


//   // DRAW LINE

// svg.selectAll(".trend")
//   .data(states)
//   .join("path")
//   .attr("class", "trend")
//   .attr("stroke", "black")
//   .attr("fill", "none")
//   .attr("d", d => lineGen(d))

// });

// TUTORIAL: 

//  /* CONSTANTS AND GLOBALS */
//  const width = 600,
//  height = 600 ,
//  margin = 20;

// /* LOAD DATA */
// d3.csv('../data/populationOverTime.csv', d => {
//  return {
//    year: new Date(+d.Year, 0, 1),
//    country: d.Entity,
//    population: +d.Population
//  }
// }).then(data => {
//  console.log('data :>> ', data);

//  // SCALES
//  const xScale = d3.scaleTime()
//  .domain(d3.extent(data, d => d.year))
//  .range ([margin, width - margin])

//  const yScale = d3.scaleLinear()
//  .domain(d3.extent(data, d => d.population))
//  .range([height - margin, margin])

//  // CREATE SVG ELEMENT
// const svg = d3.select("#container")
//  .append("svg")
//  .attr("width", width)
//  .attr("height", height)

//  // BUILD AND CALL AXES

//  // LINE GENERATOR FUNCTION

//  const lineGen = d3.line()
//    .x(d => xScale(d.year))
//    .y(d => yScale(d.population))

//    const countries = d3.groups(data, d => d.country).map(([key, data]) => data)
//      // console.log('countries :>> ', countries);
//      // // // console.log(countries)
//      // // // console.log(countries.get("Afghanistan"))


//  // DRAW LINE

// svg.selectAll(".trend")
//  .data(countries)
//  .join("path")
//  .attr("class", "trend")
//  .attr("stroke", "black")
//  .attr("fill", "none")
//  .attr("d", d => lineGen(d))

// });