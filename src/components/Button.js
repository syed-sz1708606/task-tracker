import React from 'react'
import PropTypes from 'prop-types'

function Button({ color, text, onClick}) {

 const btnstyle = {
    backgroundColor: color
 }


  return (
    <button style={btnstyle} className='btn' onClick={onClick}>
    {text} 
    </button>
  )
}

Button.defaultProps = {
    color: 'green'
}

Button.propTypes = {
    text: PropTypes.bool, 
    color: PropTypes.string
}

export default Button