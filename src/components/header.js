import { Link } from 'gatsby'
import React from 'react'

import LogoMark from './images/LogoMark'
import LogoText from './images/LogoText'

const Header = () => (
  <div
    style={{
      margin: `2.5rem auto 5rem auto`,
      maxWidth: 960,
      textAlign: `center`
    }}
  >
    <Link to="/" className="nottext" aria-label="Hiome">
      <LogoMark /><br/>
      <LogoText style={{marginTop: `1rem`}} />
    </Link>
  </div>
)

export default Header
