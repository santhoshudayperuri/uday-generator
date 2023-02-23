// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGen = () => {
    this.setState({count: Math.round(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="box">
        <div className="c">
          <h1 className="h1">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="btn" onClick={this.onGen}>
            Generate
          </button>
          <p className="h1">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
