import PropTypes from 'prop-types'
import React from 'react'

const ProductBox = ({icon, title, link, children}) => (
  <div style={{
    display: `inline-block`,
    width: `50%`,
    minWidth: `350px`,
    textAlign: `center`,
    padding: `10px 50px`,
    marginBottom: `20px`,
    verticalAlign: `top`,
  }}>
    <div><a href={link}>{icon}</a></div>
    <strong>{title}</strong>
    <div>
      {children}
    </div>
  </div>
)

ProductBox.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ProductBox
