import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

const expand = (height, e) => {
  const p = e.target.parentNode.children[1]
  if (p.style.maxHeight === height) {
    p.style.transition = "max-height 0.4s ease-in-out"
    p.style.maxHeight = '0px'
  } else {
    p.style.transition = "max-height 1s ease-in-out"
    p.style.maxHeight = height
  }
  return false
}

const FaqItem = ({title, children, height}) => (
  <div className="FaqItem">
    <h4 onClick={expand.bind(this, height)}>{title}</h4>
    <div>
      {children}
    </div>
  </div>
)

FaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string
}

FaqItem.defaultProps = {
  height: '700px'
}

export default FaqItem
