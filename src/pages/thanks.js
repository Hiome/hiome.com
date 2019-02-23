import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'

import email from '../images/email.svg'

const ThanksPage = () => (
  <Layout>
    <SEO title="Hiome" />
    <object data={email} type="image/svg+xml" style={{
      display: `block`,
      margin: `10px auto`,
      width: `90%`,
      maxWidth: `289px`,
      height: `251px`,
      top: 0,
    }}>
      New Email
    </object>
    <h1>We'll be in touch!</h1>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      What's next? <OutboundLink href="https://twitter.com/hiomeai" rel="noopener noreferrer" target="_blank">Follow us on Twitter</OutboundLink> or <Link to="/order">order your Hiome Starter Kit</Link>.
    </p>
  </Layout>
)

export default ThanksPage
