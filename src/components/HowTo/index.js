import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

const HowTo = ({stepCount, children}) => (
  <div className="HowTo">
    <div className="HowTo-Step">{stepCount}</div>
    <p>{children}</p>
  </div>
)

HowTo.propTypes = {
  children: PropTypes.node.isRequired,
  stepCount: PropTypes.number.isRequired,
}

export default HowTo
