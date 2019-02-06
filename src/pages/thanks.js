import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ThanksPage = () => (
  <Layout>
    <SEO title="Hiome" />
    <h2 style={{lineHeight: `2em`}}>
      <span role="img" aria-label="party" style={{fontSize: `3em`}}>🎉</span>
      <br/>Great, we'll let you know when we get more stock!</h2>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      What's next? You can <OutboundLink href="https://twitter.com/hiomeai">follow us on Twitter</OutboundLink> for more updates
      or <Link to="/order">reserve your order</Link> to get it sooner.</p>
  </Layout>
)

export default ThanksPage
