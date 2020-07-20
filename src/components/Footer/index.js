import React from 'react'
import { Link } from 'gatsby'

import FooterLinks from './links'
import LogoMark from '../images/LogoMark'

import './styles.css'

const Footer = () => (
  <>
    <hr style={{marginTop: `1.5rem`}} />
    <footer>
      <div id="FooterLegal">
        <Link to="/" className="nottext" aria-label="Hiome logo"><LogoMark width="17px" height="28px" /></Link>
        <br/><br/>
        <p>&copy; {new Date().getFullYear()} Hiome Inc.</p>
        <p style={{
          fontSize: `0.5em`,
          marginTop: `-10px`,
        }}>
          All rights reserved. Patents pending.<br/>
          Designed and assembled in Chicago.
        </p>
      </div>

      <FooterLinks title="Product">
        <Link to="/">Home</Link><br/>
        <Link to="/faq">FAQ</Link><br/>
        <Link to="/order">Order</Link><br/>
      </FooterLinks>

      <FooterLinks title="Company">
        <Link to="/about">About</Link><br/>
        <a href="https://blog.hiome.com" rel="noopener noreferrer" target="_blank" title="Read the latest news from Hiome">Blog</a><br/>
        <a href="mailto:support@hiome.com" title="Say hello!">Support</a><br/>
        <a href="https://twitter.com/hiomeai" rel="noopener noreferrer" target="_blank" title="Follow @hiomeai on Twitter">Twitter</a><br/>
      </FooterLinks>

      <FooterLinks title="Contact">
        1201 S Prairie Ave<br/>
        Suite 3906<br/>
        Chicago, IL 60605<br/>
      </FooterLinks>
    </footer>
  </>
)

export default Footer
