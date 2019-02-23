import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import OrderForm from '../components/OrderForm'
import ProductBox from '../components/ProductBox'
import SEO from '../components/seo'

// Product pictures
import CoreThumb from '../components/images/CoreThumb'
import DoorThumb from '../components/images/DoorThumb'
import GafferThumb from '../components/images/GafferThumb'

const OrderPage = () => (
  <Layout>
    <SEO title="Order Hiome" />

    <h1 style={{lineHeight: `2em`}}>Hiome Starter Kit <span className="blackLabel">Pre-Order</span></h1>
    <div style={{
      margin: `0 auto 20px auto`,
    }}>
      <ProductBox icon={<CoreThumb />} title="Hiome Core" />
      <ProductBox icon={<DoorThumb />} title="Hiome Door" />
      <ProductBox icon={<GafferThumb />} title="Gaffer Tape" />
    </div>

    <OrderForm />

    <h2>Early Beta Access</h2>
    <p>
      We're currently running a private beta program while we iron out any issues and get certified for HomeKit and SmartThings. In the meantime,
      we're looking for more people who are passionate about their smart home, excited about Hiome, and enjoy being on the bleeding edge
      to get early access to Hiome and help us find any remaining rough edges. If that sounds like
      you, <OutboundLink href="https://docs.google.com/forms/d/e/1FAIpQLScg3MXNWBfSrjHNZo2nojIE68YqElBf_6kvNnEHZBtdvMuNfw/viewform?usp=sf_link" rel="noopener noreferrer" target="_blank">apply for our beta program</OutboundLink>! If
      selected, you'll get your Hiome pre-order as early as April, a direct line to the team, and an extra Hiome Door sensor as a thank you.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h4>Will Hiome Door fit on my door?</h4>
    <p>
      Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep and at most 40" (1 meter)
      wide. <OutboundLink href="mailto:support@hiome.com?subject=Double%20door%20support">Let us know</OutboundLink> if you have
      extra-wide or double doors.
    </p>
    <p>
      If you have any questions, feel free to <OutboundLink href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">send us a picture
      of your door frame</OutboundLink> and we'll let you know.
    </p>

    <h4>How many Hiome Door sensors do I need?</h4>
    <p>
      You can get started with just one, but Hiome works better with more sensors. As you connect more doors, your lights will be able
      to follow you from room to room.
    </p>

    <h4>Can I buy more Hiome Door sensors later?</h4>
    <p>
      Of course! Once we have fulfilled all pre-orders, we'll open up orders for additional sensors without the Starter Kit.
    </p>

    <p style={{
      textAlign: `center`,
      marginTop: `2rem`,
      fontWeight: `bold`,
    }}><Link to="/faq">More questions &#x2192;</Link></p>
  </Layout>
)

export default OrderPage
