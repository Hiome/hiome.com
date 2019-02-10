import React from 'react'

import Layout from '../components/layout'
import EmailSignup from '../components/EmailSignup'
import OrderForm from '../components/OrderForm'
import SEO from '../components/seo'

const OrderPage = () => (
  <Layout>
    <SEO title="Order Hiome" />
    <p>
      We've been diligently testing Hiome for almost two years, refining the features and working out the kinks.
      Now we want to prioritize giving it to the people who are most excited about smart homes.
      Early users have an outsized impact on the roadmap of a product, so we want to make sure we're working with great people!
      We'll be honest - there may be some rough edges still that are quickly being polished away, but you'll get early access,
      a direct line to the team, and the opportunity to strongly shape the direction of Hiome.
    </p>

    <p>
      If that sounds enticing, you can reserve Hiome below to join our beta testing program.
      In exchange, we'll periodically ask for feedback and collect anonymized diagnostic data from your home during the beta period.
    </p>

    <p>
      Everything we do is designed to make your life simple, and our reservation system is no different.
      New reservations are currently estimated to ship in April. You only need a $150 deposit to reserve today,
      with the rest of your order processing when it ships. If you change your mind, you can cancel your
      reservation for a full refund of your deposit. We're confident you'll love Hiome, so if you're not happy for any reason
      after the beta period, we'll take it back, no questions asked. We're committed to being as fair and transparent as possible.
    </p>

    <p>
      Each Hiome system is assembled in Chicago, and we'll ship products out as we make them, in the order they were reserved.
    </p>

    <h2>Reserve Hiome</h2>
    <OrderForm />

    <h2>Get Notified</h2>
    <p>Don't like to be on the bleeding edge? No problem. Enter your email below and we'll let you know when Hiome graduates from beta status. We promise we won't email you for any other reason. We'll be too busy making other homes smarter <span role="img" aria-label="wink">😉</span></p>
    <EmailSignup />
  </Layout>
)

export default OrderPage
