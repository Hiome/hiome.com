import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import LogoMark from './images/LogoMark'
import LogoText from './images/LogoText'

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: 'navlink-active navlink' }
    : { className: 'navlink' }
}

const NavLink = props => (
  <Link getProps={isPartiallyActive} {...props}>
    {props.children}
  </Link>
)

const HeroHeader = ({ hero, title }) => (
  <div
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.5rem 1rem`,
      }}
    >
      <div style={{float: `right`, paddingTop: `22px`}}>
        <NavLink to="/core">Core</NavLink>
        <span style={{marginRight: `10px`, marginLeft: `-10px`, color: `#ccc`}}>&</span>
        <NavLink to="/door">Door</NavLink>
        <Link to="/order" className="primary">Order Now</Link>
      </div>
      <Link to="/" className="nottext"><LogoMark /> <LogoText style={{paddingLeft: `5px`}} width="110px" height="40px" /></Link>
    </div>

    <div style={{
      maxWidth: 960,
      margin: `0 auto`,
      textAlign: `center`,
    }}>
      <h1 style={{position: `absolute`, zIndex: `10`, margin: `3% auto`, width: `100%`, maxWidth: 960}}>{title}</h1>
      {hero}
    </div>
  </div>
)

HeroHeader.defaultProps = {
  hero: null,
  title: '',
}

HeroHeader.propTypes = {
  hero: PropTypes.node,
  title: PropTypes.string,
}

export default HeroHeader
