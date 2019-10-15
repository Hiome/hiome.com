import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

const expand = (e) => {
  const p = e.target.parentNode.children[1]
  if (p.style.maxHeight === '700px') {
    p.style.transition = "max-height 0.4s ease-in-out"
    p.style.maxHeight = '0px'
  } else {
    p.style.transition = "max-height 1s ease-in-out"
    p.style.maxHeight = '700px'
  }
  return false
}

const FaqItem = ({title, children}) => (
  <div className="FaqItem">
    <h4 onClick={expand}>{title}</h4>
    <div>
      {children}
    </div>
  </div>
)

FaqItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default FaqItem
