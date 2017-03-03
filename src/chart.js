import d3 from "d3"

function chart(data, el){
  // d3.select(el).append("div")
  // body?
  const div = d3.select(el).append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)


  let email_lines  = data.email_lines
  data = data.X_embedded
  data.forEach(function(d, i) {
    d.push( email_lines[i].replace(/\n+/g, '<br>') )
  });

  // console.log(data)


  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = window.innerWidth - margin.left - margin.right,
      height = window.innerHeight - margin.top - margin.bottom;

  var x = d3.scale.linear()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  // var color = d3.scale.category10();
  var color = d3.scale.linear()
    .domain(d3.extent(data, function(d) { return d[2]}))
    .range(["yellow", "blue"])

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  // xxx react
  // var svg = d3.select("body").append("svg")
  var svg = d3.select(el).append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .call(d3.behavior.zoom().scaleExtent([1, 18]).on("zoom", zoom))

  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function zoom() {
    svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"+"translate(" + margin.left + "," + margin.top + ")" )
    // svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"+ )
  }


    x.domain(d3.extent(data, function(d) { return d[0]; })).nice();
    y.domain(d3.extent(data, function(d) { return d[1]; })).nice();

    svg.selectAll(".dot").data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 3.5)
    .attr("cx", function(d) { return x(d[0]); })
    .attr("cy", function(d) { return y(d[1]); })
    .style("fill", function(d) { return color(d[2]); })
    .on("mouseover", function(d) {
        d3.select(this).classed('active', true)
        div.transition()
            .duration(200)
            .style("opacity", .8);
        div.html(d[3])
        let div_el = div[0][0]
        let div_w = div_el ? div_el.clientWidth : 0
        div.style("left", (d3.event.pageX-(div_w/2)) + "px")
            .style("top", (d3.event.pageY+5) + "px");
        })
    .on("mouseout", function(d) {
      d3.select(this).classed('active', false)
        div.transition()
            .duration(300)
            .style("opacity", 0);
    });

}

export default chart
