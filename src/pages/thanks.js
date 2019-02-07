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
    <h2>Got it! We'll be in touch.</h2>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      What's next? You can <OutboundLink href="https://twitter.com/hiomeai">follow us on Twitter</OutboundLink> for more updates
      or <Link to="/order">reserve your order</Link> to get it sooner.</p>
  </Layout>
)

export default ThanksPage
