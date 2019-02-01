import PropTypes from 'prop-types'
import React from 'react'

const HowTo = ({stepCount, children}) => (
  <div style={{width: `33%`, minWidth: `250px`, float: `left`, padding: `10px`, marginBottom: `20px`, textAlign: `center`}}>
    <div style={{
      border: `2px solid blue`,
      borderRadius: `50%`,
      width: `30px`,
      height: `30px`,
      margin: `10px auto`,
      color: `blue`,
      lineHeight: `21px`,
    }}>{stepCount}</div>
    <p>{children}</p>
  </div>
)

HowTo.propTypes = {
  children: PropTypes.node.isRequired,
  stepCount: PropTypes.number.isRequired,
}

export default HowTo
