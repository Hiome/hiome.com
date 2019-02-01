import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO />
    <h2 style={{lineHeight: `2em`}}>¯\_(ツ)_/¯<br/>Sorry, we couldn&#39;t find that page.</h2>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>Try our <Link to="/">home page</Link> or <a href="mailto:support@hiome.com" title="Let us know what happened">get in touch</a>.</p>
  </Layout>
)

export default NotFoundPage
