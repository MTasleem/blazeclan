import React, { Component } from 'react'
import Box from '../Box/Box'
import './BoxContainer.css'
import { rgbValue, generateColors } from '../helpers'

class BoxContainer extends Component {
  static defaultProps = {
    defaultNumber: 32768
  }
  constructor(props) {
    super(props)
    this.state = {
      colors: generateColors(this.props.defaultNumber)
    }
    this.changeColor = this.changeColor.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this.props, nextProps) && shallowCompare(this.state, nextState);
  }

  changeColor(c) {
    let newColor
    do {
      newColor = `rgb( 
        ${rgbValue()}, 
        ${rgbValue()}, 
        ${rgbValue()} 
      )`
    } while (newColor === c)
    this.setState(st => ({
      colors: st.colors.map(color => {
        if (color !== c) return color
        return newColor
      })
    }))
  }

  render() {
    return (
      <div className='BoxContainer'>
        {this.state.colors.map((color, index) => (
          <Box key={index} color={color} changeColor={this.changeColor} />
        ))}
      </div>
    )
  }
}

export default BoxContainer