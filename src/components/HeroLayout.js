import React from 'react'
import PropTypes from 'prop-types'

import HeroHeader from './HeroHeader'
import Footer from './Footer'
import './layout.css'

const HeroLayout = ({ hero, title, children }) => (
  <>
    <HeroHeader hero={hero} title={title} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem 1.45rem`,
      }}
    >
      {children}
    </div>
    <Footer />
  </>
)

HeroLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.node,
  title: PropTypes.string,
}

HeroLayout.defaultProps = {
  hero: null,
  title: '',
}

export default HeroLayout
