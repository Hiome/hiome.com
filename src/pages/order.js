import React from 'react'

import Layout from '../components/layout'
import EmailSignup from '../components/EmailSignup'
import OrderForm from '../components/OrderForm'
import SEO from '../components/seo'

const OrderPage = () => (
  <Layout>
    <SEO title="Order Hiome" />
    <p><span role="img" aria-label="wave">👋</span> Hey there,</p>
    <p>First, let's start with the bad news: we're sold out of our current batch. I know, it sucks. But all hope is not lost...</p>
    <p>
      We've been diligently testing Hiome in different homes for the last year, refining the features and working out the kinks.
      Now we're producing the next revision and want to prioritize giving it to the people who are most excited about it.
      Early users have an outsized impact on the roadmap of a product, so we want to make sure we're working with great people!
      We'll be honest - there may be some rough edges still that are quickly being polished away, but you'll get early access,
      priority support from the team, and the opportunity to strongly shape the direction of Hiome.</p>

    <p>
      If that sounds enticing, <strong>here's the deal</strong>: you can reserve an order below to join our beta testing program
      and get Hiome at a <em>significant</em> discount. In exchange, we'll periodically ask for feedback about your experience.
    </p>

    <p>
      Everything we do is designed to make your life simple, and our reservation system is no different.
      You'll only be charged for 20% of your order today, with the rest of the order processing when it actually ships.
      If you change your mind before it ships, you can cancel your reservation for a full refund of your deposit. If you're
      not happy with Hiome after the beta period, we'll take it back, no questions asked. In other words, there's pretty much no downside.
    </p>

    <p>This is not a Kickstarter or preorder campaign, so you won't be waiting a year for us to figure out how to scale production in China.
      Each Hiome product is assembled in Chicago, and we'll ship products out as we make them, in the order they were reserved.
      The current estimated delivery date, based on number of orders in line so far, is May 2019.</p>

    <h2>Reserve Hiome</h2>
    <OrderForm />

    <h2>Get Notified</h2>
    <p>Don't like to be on the bleeding edge? No problem. Feel free to enter your email below and we'll let you know when we have finished products
      in stock. We promise we won't email you for any other reason. We'll be too busy making other homes smarter <span role="img" aria-label="wink">😉</span></p>
    <EmailSignup />
  </Layout>
)

export default OrderPage
