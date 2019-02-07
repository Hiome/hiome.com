import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Confetti from '../components/Confetti'

const SuccessPage = () => (
  <Layout>
    <SEO title="Hiome" />
    <h2 style={{lineHeight: `2em`}}>
      <span role="img" aria-label="party" style={{fontSize: `3em`}}>🎉</span>
      <br/>Congrats, you've reserved Hiome!</h2>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      We'll keep you updated as we work on your order. When we're ready to ship, we'll reach out to get your mailing address and
      process the rest of your payment.
      If you have any questions or change your mind and want to cancel your reservation, just send us an email
      to <OutboundLink href="mailto:support@hiome.com">support@hiome.com</OutboundLink>.</p>
    <Confetti />
  </Layout>
)

export default SuccessPage
