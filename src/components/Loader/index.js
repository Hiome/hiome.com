import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Loader = ({size}) => (
  <div className="triple-spinner" style={{width: size, height: size}}></div>
)

Loader.defaultProps = {
  size: `125px`,
}

Loader.propTypes = {
  size: PropTypes.string,
}

export default Loader
