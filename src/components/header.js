import { Link } from 'gatsby'
import React from 'react'

import LogoBlack from './images/logo-black'

const Header = () => (
  <div
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 200, lineHeight: `1.5em` }}>
        <Link
          to="/"
          style={{ color: `#000`, textDecoration: `none` }}
        >
          <LogoBlack /><br/>
          Hiome
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
