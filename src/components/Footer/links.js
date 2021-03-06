import PropTypes from 'prop-types'
import React from 'react'

const FooterLinks = ({title, children}) => (
  <div className='FooterLinks'>
    <strong style={{
      fontSize: `0.9em`,
      textTransform: `uppercase`,
      marginBottom: `5px`,
      display: `block`,
    }}>{title}</strong>
    {children}
  </div>
)

FooterLinks.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default FooterLinks
