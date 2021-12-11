
// // 9th Street Artist 
  /* CONSTANTS AND GLOBALS */
  const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 60, left: 60, right: 40 },
  radius = 5;
  
  /* LOAD DATA */
d3.csv('../data/9thStWomenArtistCombo.csv', d3.autoType)
.then(data => {

  
    /* SCALES */
  
    const xScale = d3.scaleLinear()
    // .domain(d3.extent(data, d => d.Height))
    .domain([0, d3.max(data.map(d => d.H))])
    .range([margin.left, width - margin.right])
    // .range([0, width - margin])
  

    const yScale = d3.scaleLinear()
    // .domain(d3.extent(data, d => d.Width))
    .domain([0, d3.max(data, d => d.W)])
    .range([height - margin.bottom, margin.top])
    // .range([height - margin, margin])
  
    console.log('yScale.domain():>>', yScale.domain());
    console.log('xScale.domain():>>', xScale.domain());

    const colorScale = d3.scaleOrdinal()
    .domain(["Illustrated Book", "Drawing", "Print", "Painting"])
    .range(["red", "yellow", "purple", "orange", "pink"])
    
    /* HTML ELEMENTS */

    const svg = d3.select("#container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      // .style("background-color", "white")

       // axis scales
    const xAxis = d3.axisBottom(xScale)
      svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis);
  
    const yAxis = d3.axisLeft(yScale)
    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis);
  
    // svg.selectAll(".dot")
    // .data(data)
    // .join("circle")
    // .attr("class", "dot")
    // .attr("cx", d => xScale(d.Height))
    // .attr("cy", d => yScale(d.Width))
    // .attr("r", radius)
    // .style("fill", d => colorscale(d.Classification))
  
    // svg.append("g")
    //   .attr("class", "xaxis")
    //   .style("transform", 'translate(0px,${margin - width}px)')
    //   .call(d3.axisBottom(xScale))
  
    //   svg.append("g")
    //   .attr("class", "yaxis")
    //   .style("transform", 'translate(${margin - height}px, 0px)')
    //   .call(d3.axisLeft(yScale))

    // CIRCLES

      const dot = svg
      .selectAll("circle")
      .data(data, d => d.Classification) // second argument is the unique key for that row
      .join("circle")
      .attr("cx", d => xScale(d.H))
      .attr("cy", d => yScale(d.W))
      .attr("r", radius)
      .attr("fill", d => colorScale(d.Classification))

  });