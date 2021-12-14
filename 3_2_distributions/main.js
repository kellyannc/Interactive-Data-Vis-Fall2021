/* CONSTANTS AND GLOBALS */
const width = 500,
  height = 500,
  // margin = ,
  radius = 5

// these variables allow us to access anything we manipulate in init() but need access to in draw().
// All these variables are empty before we assign something to them.
let svg;
let xScale;
let yScale;
let colorScale;

/* APPLICATION STATE */
let state = {
  data: [],
  selectedParty: "All" // + YOUR INITIAL FILTER SELECTION
};

/* LOAD DATA */
d3.json("../data/environmentRatings.json", d3.autoType).then(raw_data => {
  // + SET YOUR DATA PATH
  console.log("data", raw_data);
  // save our data to application state
  state.data = raw_data;
  init();
});

/* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in
function init() {
  // + SCALES
xScale = d3.scaleLinear()
.domain (d3.extent(state.data, d => d.ideologyScore2020))
.range([0, width])

yScale = d3.scaleLinear()
.domain (d3.extent(state.data, d => d.envScore2020))
.range([height, 0])

colorScale = d3.scaleOrdinal()
.domain(["R", "D", "I"])
.range(["red", "blue", "purple"])


  // + AXES


  // + UI ELEMENT SETUP

  const selectElement = d3.select("#dropdown")

  selectElement
  .selectAll("option")
  .data([
    {key: "All", label: "Both Parties" },
    {key: "R", label: "Republican" },
    {key: "D", label: "Democrat" },
    // "R", "D"
  ])
    // .data(Array.from(new Set(state.data.map(d => d.Party))))
    .join("option")
    // .attr("value", d => d)
    // .text(d => d)
    .attr("value", d => d.key)
    .text(d => d.label)

  // + CREATE SVG ELEMENT

  selectElement.on("change", event => {
    state.selectedParty = event.target.value
    // console.log('state :>> ', state);
    draw();
  // + CALL AXES
  })


  svg = d3.select("#container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)


  draw(); 
}

/* DRAW FUNCTION */

function draw() {

  const filteredData = state.data.filter(d =>
    state.selectedParty === "All" || d.Party === state.selectedParty)

  const dots = svg.selectAll("circle.dot")
  .data(filteredData, d => d.BioID)
  .join(
    enter => enter.append("circle")
    .attr("r", radius)
    .attr("cx", d => xScale(d.ideologyScore2020))
    .attr("cy", d => yScale(d.envScore2020))
    .attr("fill", d => colorScale(d.Party))
    .attr("class", "dot"),
    update => update,
    exit => exit.call(exit => exit.remove()),
  )
}