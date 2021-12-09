
/* CONSTANTS AND GLOBALS */
const width = 800;
const height = 600
margin = 30;
leftmargin = 50;

/* LOAD DATA */
d3.csv('../data/Women_simplfied.csv', d3.autoType)
  .then(data => {

    const svg = d3.select("#container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "white")
      // .style('border', '10px, white') 
      .style('font-size', '100px')        
      .style('color', 'rgb(40, 56, 148)')            
      .style('text-align', 'right')    
      .style('left-padding', '50px')            

    const Name = data.map(d => d.Artist)

    const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.count))
    .range([0, width - margin])
    .nice();

     const yScale = d3.scaleBand()
    .domain(Name)
    .range([height, 0])
    .paddingInner(.20)
    .paddingOuter(.10);

    const colorscale = d3.scaleOrdinal()
    .domain(["Elaine de Kooning", "Helen Frankenthaler", "Grace Hartigan", "Joan Mitchell", "Lee Krasner"])
    .range(["red", "orange", "purple", "orange", "green"])

    svg.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (0))
      .attr("y", d => yScale(d.Artist))
      .attr("width", d => xScale(d.count))
      .attr("height", yScale.bandwidth())
      .attr('fill', 'none')
      .style("stroke", d => colorscale(d.Artist))
      // .style('font-size', '100px')        
      // .style('color', 'purple')            
      // .style('text-align', 'left')    
      .style('left-padding', '30px')

      svg.append("g")
      .attr("class", "x-axis")
      .style("transform", 'translate(0px,${height - margin}px)')
      .call(d3.axisBottom(xScale))

      svg.append("g")
      .attr("class", "y-axis")
      .style("transform", 'translate(0px,0px)')
      .call(d3.axisRight(yScale))

//       d3.select('body').append('div').attr('id', 'tooltip')
//       .attr('style', 'position: absolute; opacity: 0;');
//       d3.select('body').append('svg').attr('width', 300).attr('height', 300);
//       d3.select('svg').selectAll('circle').data(['a','b','c'])
//       .join('circle')
//       .attr('r', 3)
//       .attr('cy', 5)
//       .attr('cx', (d,i) => i*15+15)
//       .on('mouseover', function(d) {
//         d3.select('#tooltip').transition().duration(200).style('opacity', 1).text(d)
//  })
 
//  .on('mouseout', function() {
//  d3.select('#tooltip').style('opacity', 0)
 
//  })
//  .on('mousemove', function() {
//  d3.select('#tooltip').style('left', (d3.event.pageX+10) + 'px').style('top', (d3.event.pageY+10) + 'px')
//  })


  })