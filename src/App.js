import React, { Component } from 'react'

export default class  extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState({timer:this.state.timer+1})
    }, 1000);
  }

  state={ fullname:"ahmed",
  bio:"I am a web developer",
  profession:"student",
  age:22,
  
shows:false,
timer:0,

  }
  render() {
    return (
      
      <div>
        <h1>timer:{this.state.timer  }</h1>
<button onClick={()=>{this.setState({shows:!this.state.shows})}}>h</button>

{this.state.shows && <h2>{this.state.fullname}</h2>}

      </div>
    )
  }
}
