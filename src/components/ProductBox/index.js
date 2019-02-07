import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const ProductBox = ({icon, title, link, children}) => (
  <div className="ProductBox">
    <div><Link to={link}>{icon}</Link></div>
    <strong>{title}</strong>
    <p>
      {children} <Link to={link}>Learn more</Link>
    </p>
  </div>
)

ProductBox.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ProductBox
