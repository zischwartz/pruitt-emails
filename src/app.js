import React from 'react'

import chart from './chart.js'
const email_data = require("json-loader!../email_plot_data_3.json")

// console.log(email_data.email_lines.length)

class App extends React.Component {
  constructor(props){
    super()
  }
  componentDidMount(){
    let chart_el = chart(email_data, this.refs["display_div"])
    // this.refs["display_div"].appendChild(chart_el);
  }
  render(){
    return<div><div ref="display_div"></div></div>
  }
}

export default App
