import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'

import startled from '../images/startled.svg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <object data={startled} type="image/svg+xml" style={{
      display: `block`,
      margin: `10px auto`,
      width: `90%`,
      maxWidth: `372px`,
      height: `275px`,
      top: 0,
    }}>
      Startled
    </object>
    <h1>Well, this is awkward.</h1>
    <p style={{textAlign: `center`, marginTop: `-30px`, lineHeight: `1.8em`}}>
      We can't find the page you're looking for.<br/>
      Try our <Link to="/">home page</Link> or <OutboundLink href="mailto:support@hiome.com?subject=Something%20broke" title="Let us know what you were looking for">get in touch</OutboundLink>.</p>
  </Layout>
)

export default NotFoundPage
