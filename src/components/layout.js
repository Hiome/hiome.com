import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1rem 1.45rem`,
      }}
    >
      {children}
    </div>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
