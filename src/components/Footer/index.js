import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import FooterLinks from './links'
import LogoMark from '../images/LogoMark'

import './styles.css'

const Footer = () => (
  <>
    <hr style={{marginTop: `1.5rem`}} />
    <footer>
      <div id="FooterLegal">
        <Link to="/" className="nottext"><LogoMark width="17px" height="28px" /></Link>
        <br/><br/>
        <p>&copy; {new Date().getFullYear()} Hiome Inc.</p>
        <p style={{
          fontSize: `0.5em`,
          lineHeight: `1.5em`,
          marginTop: `-15px`,
        }}>
          All rights reserved. Patents pending.
        </p>
      </div>

      <FooterLinks title="Product">
        <Link to="/">Home</Link><br/>
        <Link to="/faq">FAQ</Link><br/>
        <Link to="/order">Order</Link><br/>
      </FooterLinks>

      <FooterLinks title="Company">
        <Link to="/about">About</Link><br/>
        <OutboundLink href="mailto:support@hiome.com" title="Say hello!">Support</OutboundLink><br/>
        <OutboundLink href="https://twitter.com/hiomeai" rel="noopener noreferrer" target="_blank" title="Follow @hiomeai on Twitter">Twitter</OutboundLink><br/>
      </FooterLinks>

      <FooterLinks title="Contact">
        1201 S Prairie Ave<br/>
        Suite 3906<br/>
        Chicago, IL 60605<br/>
        (312) 624-6245<br/>
      </FooterLinks>
    </footer>
  </>
)

export default Footer
