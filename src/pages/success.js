import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Confetti from '../components/Confetti'

const SuccessPage = () => (
  <Layout>
    <SEO title="Hiome" />
    <h1 style={{lineHeight: `2em`}}>
      <span role="img" aria-label="party" style={{fontSize: `3em`}} onClick={throwConfetti}>🎉</span>
      <br/>Your home's about to get a lot smarter!</h1>
    <p style={{textAlign: `center`, marginTop: `-30px`}}>
      We can't wait! We'll keep you updated as we work on your order. When we're ready to ship, we'll reach out to
      confirm your mailing address. If you have any questions, feel free to
      email <a href="mailto:support@hiome.com">support@hiome.com</a>.</p>
    <Confetti />
  </Layout>
)

const throwConfetti = () => {
  const event = new Event('confetti')
  document.getElementById("confetti").dispatchEvent(event)
}

export default SuccessPage
