import { Link } from 'gatsby'
import React from 'react'

import FooterLinks from './links'

import LogoBlackSmall from '../images/logo-black-small'

const Footer = () => (
  <>
    <hr style={{marginTop: `1.5rem`}} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.5rem 1rem 2.5rem 1rem`,
        verticalAlign: `top`,
      }}
    >
      <div style={{
        width: `40%`,
        minWidth: `180px`,
        display: `inline-block`,
      }}>
        <Link to="/" style={{padding: `0`}}><LogoBlackSmall /></Link>
        <br/><br/>
        <p>&copy; {new Date().getFullYear()} Hiome Inc.</p>
        <p style={{
          fontSize: `0.5em`,
          lineHeight: `1.5em`,
          marginTop: `-15px`,
        }}>
          Patents pending. HomeKit is a registered trademark of Apple Inc.
        </p>
      </div>

      <FooterLinks title="Products">
        <Link to="/core/" title="The brain for your home">Core</Link><br/>
        <Link to="/door/" title="The most accurate home occupancy sensor">Door</Link><br/>
        <Link to="/home-stream/" title="For developers, by developers">Home Stream</Link><br/>
        <Link to="/order/" title="Join the club!">Order Now</Link><br/>
      </FooterLinks>

      <FooterLinks title="Company">
        <Link to="/about/">About</Link><br/>
        <Link to="/support/">Support</Link><br/>
        <a href="https://blog.hiome.com/">Blog</a><br/>
        <a href="https://twitter.com/hiomeai" title="Follow @hiomeai on Twitter">Twitter</a><br/>
        <a href="https://instagram.com/hiomeai" title="Follow @hiomeai on Instagram">Instagram</a><br/>
      </FooterLinks>

      <FooterLinks title="Contact">
        1201 S Prairie Ave<br/>
        Suite 3906<br/>
        Chicago, IL 60605<br/>
        (408) 931-2392<br/>
        <a href="mailto:support@hiome.com" title="Say hello!">support@hiome.com</a><br/>
      </FooterLinks>
    </div>
  </>
)

export default Footer
