import React from 'react'

import chart from './chart.js'
const email_data_url = require("file-loader!../email_plot_data_3.json")
import d3 from "d3"


require('./style.css')

// console.log(email_data.email_lines.length)

class App extends React.Component {
  constructor(props){
    super()
    this.state = {show_info:false, done_loading:false}
    this.toggleInfo = this.toggleInfo.bind(this)
  }
  componentDidMount(){
    d3.json(email_data_url, (data)=>{
      this.setState({done_loading:true})
      chart(data, this.refs["display_div"])
    })
    // this.refs["display_div"].appendChild(chart_el);
  }
  toggleInfo(){
    this.setState({show_info:!this.state.show_info})
  }
  getInfo(){
    return <div id="info-content"><p>This is a visualization of EPA head <a href="https://en.wikipedia.org/wiki/Scott_Pruitt">Scott Pruitt</a>&#8217;s recently released <a href="https://archive.org/details/ScottPruittEmails">emails</a> from his last job as OK AG. Position and color are based on <a href="https://en.wikipedia.org/wiki/Tf%E2%80%93idf">tf-idf</a> and <a href="https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding">t-SNE</a>. More <a href="https://github.com/zischwartz/pruitt-emails/blob/master/text.ipynb">info here</a>.</p> </div>
  }
  render(){
    let loading = this.state.done_loading ? '' : <div id="loading-indicator"><h2>Loading...</h2><h3>(There are <i>a lot</i> of emails)</h3></div>
    let info = !this.state.show_info ? '' : this.getInfo()
    let mark = !this.state.show_info ? '?' : "x"
    return<div>
            {loading}
            <div ref="display_div"></div>
            <div id="info">
              <div id="info-button" onClick={this.toggleInfo}>{mark}</div>
              {info}
            </div>
          </div>
  }
}

export default App
