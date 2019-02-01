import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SuccessPage = () => (
  <Layout>
    <SEO title="Hiome" />
    <h2 style={{lineHeight: `2em`}}>
      <span role="img" aria-label="party" style={{fontSize: `3em`}}>🎉</span>
      <br/>Congrats! Your home will thank you.</h2>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      We'll keep you updated as we work on your order. When we get ready to ship, we'll reach out to confirm your mailing address and
      process the rest of the payment. In the meantime, you can <a href="https://twitter.com/hiomeai">follow us on Twitter</a> for more updates.
      If you have any questions or change your mind and want to cancel your reservation, just send us an email
      at <a href="mailto:support@hiome.com">support@hiome.com</a>.</p>
  </Layout>
)

export default SuccessPage
