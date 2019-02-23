import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Confetti from '../components/Confetti'

const SuccessPage = () => (
  <Layout>
    <SEO title="Hiome" />
    <h1 style={{lineHeight: `2em`}}>
      <span role="img" aria-label="party" style={{fontSize: `3em`}}>🎉</span>
      <br/>Your home's about to get a lot smarter!</h1>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      We can't wait! We'll keep you updated as we work on your order. When we're ready to ship, we'll reach out to
      confirm your mailing address. If you have any questions, feel free to
      email <OutboundLink href="mailto:support@hiome.com">support@hiome.com</OutboundLink>.</p>
    <Confetti />
  </Layout>
)

export default SuccessPage
