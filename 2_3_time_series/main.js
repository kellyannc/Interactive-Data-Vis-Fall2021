
// //  (9th Street women artist graph) 
//  /* CONSTANTS AND GLOBALS */
// const width = 1200,
//   height = 600,
//   margin = 40;

// const colorscale = d3.scaleOrdinal()
// .domain(["Elaine de Kooning", "Grace Hartigan", "Helen Frankenthaler", "Joan Mitchell", "Lee Krasner"])
// .range(["red", "purple", "pink", "blue", "green"])

// const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')
// const formatDate = d3.timeFormat("%Y")

// /* LOAD DATA */
//  d3.csv('../data/9thStWomenArtistCombo.csv', d => {
//     return {
//       artworkdate: new Date(d.Date, 0, 1),
//       Artistname: d.Artist,
//       artworkcount: +d.moma
//  }
// }).then(data => {
//  console.log('data :>> ', data);
 
//   // SCALES
//   const xScale = d3.scaleTime()
//   .domain(d3.extent(data, d => d.artworkdate))
//   .range ([margin, width - margin])

//   const yScale = d3.scaleLinear()
//   .domain(d3.extent(data, d => d.artworkcount))
//   .range([height - margin, margin])

//   // CREATE SVG ELEMENT
// const svg = d3.select("#container")
//   .append("svg")
//   .attr("width", width)
//   .attr("height", height)

//   // BUILD AND CALL AXES

// const xAxis = d3.axisBottom(xScale)
// .ticks(6) 

// const xAxisGroup = svg.append("g")
// .attr("class", "xAxis")
// .attr("transform", `translate(${0}, ${height - margin.bottom})`)
// .call(xAxis)

// xAxisGroup.append("text")
// .attr("class", 'xLabel')
// .attr("transform", `translate(${width / 2}, ${35})`)
// .text("Year")

// const yAxis = d3.axisLeft(yScale)
// .tickFormat(formatBillions)

// const yAxisGroup = svg.append("g")
// .attr("class", "yAxis")
// .attr("transform", `translate(${margin.right}, ${0})`)
// .call(yAxis)

// yAxisGroup.append("text")
// .attr("class", 'yLabel')
// .attr("transform", `translate(${-45}, ${height / 2})`)
// .attr("writing-mode", 'vertical-rl')
// .text("totalcases")


//   // LINE GENERATOR FUNCTION

//   const lineGen = d3.line()
//     .x(d => xScale(d.artworkdate))
//     .y(d => yScale(d.artworkcount))

//     const artworksatmoma = d3.groups(data, d => d.Artistname).map(([key, data]) => data)
//       // console.log('countries :>> ', countries);
//       // // // console.log(countries)
//       // // // console.log(countries.get("Afghanistan"))


//   // DRAW LINE


// svg.selectAll(".line")
//   .data([data])
//   .join("path")
//   // .append("g)")
//   .attr("class", "trend")
//   // .attr("stroke", "black")
//   .attr("fill", "none")
//   .attr("d", d => lineGen(d))
//   .style("stroke", d => colorscale(d.Artistname))

//   svg.append("g")
//   .attr("class", "x-axis")
//   .style("transform", 'translate(0px,${height - margin}px)')
//   .call(d3.axisBottom(xScale))

//   svg.append("g")
//   .attr("class", "y-axis")
//   .style("transform", 'translate(0px,0px)')
//   .call(d3.axisRight(yScale))

// });


// // // //  Homework 
//  /* CONSTANTS AND GLOBALS */
// const width = 800,
//   height = 600 ,
//   margin = 10;

// const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')
// const formatDate = d3.timeFormat("%Y")

// /* LOAD DATA */
//  d3.csv('../data/US_Covid_overtime.csv', d => {
//     return {
//       inddate: new Date(d.date),
//       usstate: d.state,
//       cases: +d.newcase,
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
//   const xAxis = d3.axisBottom(xScale)
//     .ticks(6) 

//     const xAxisGroup = svg.append("g")
//     .attr("class", "xAxis")
//     .attr("transform", `translate(${0}, ${height - margin.bottom})`)
//     .call(xAxis)

//   xAxisGroup.append("text")
//     .attr("class", 'xLabel')
//     .attr("transform", `translate(${width / 2}, ${35})`)
//     .text("Year")

//   const yAxis = d3.axisLeft(yScale)
//     .tickFormat(formatBillions)

//   const yAxisGroup = svg.append("g")
//     .attr("class", "yAxis")
//     .attr("transform", `translate(${margin.right}, ${0})`)
//     .call(yAxis)

//   yAxisGroup.append("text")
//     .attr("class", 'yLabel')
//     .attr("transform", `translate(${-45}, ${height / 2})`)
//     .attr("writing-mode", 'vertical-rl')
//     .text("totalcases")

//   // LINE GENERATOR FUNCTION

//   const lineGen = d3.line()
//     .x(d => xScale(d.inddate))
//     .y(d => yScale(d.cases))

//     const states = d3.groups(data, d => d.state).map(([key, data]) => data)
//     //   // console.log('countries :>> ', countries);
//     //   // // // console.log(countries)
//     //   // // // console.log(countries.get("Afghanistan"))


//   // DRAW LINE

// svg.selectAll(".line")
//   .data([data])
//   .join("path")
//   .attr("class", "line")
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
d3.csv('../data/US_Covid_overtime.csv', d => {
 // use custom initializer to reformat the data the way we want it
 // ref: https://github.com/d3/d3-fetch#dsv
 return {
  dates: new Date(d.date),
   states: d.state,
    totaldeaths: +d.tot_death
 }
}).then(data => {
//  console.log('data :>> ', data);

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

 // LINE GENERATOR FUNCTION
 const lineGen = d3.line()
   .x(d => xScale(d.dates))
   .y(d => yScale(d.totaldeaths))
   
const usstates = d3.groups(data, d => d.states).map(([key, data]) => data)
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
  
  

});