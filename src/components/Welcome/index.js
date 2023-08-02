import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return (
      <div>
        <h1>Hello,{name}</h1>
        <p>Good to see you {name}</p>
      </div>
    )
  }
}

export default Welcome
