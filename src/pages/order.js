import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import OrderForm from '../components/OrderForm'
import ProductBox from '../components/ProductBox'
import FaqItem from '../components/FaqItem'
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

    <h4 style={{marginTop: `9em`, marginBottom: `3em`}}>Frequently Asked Questions</h4>

    <FaqItem title="Will Hiome Door fit on my door?">
      <p>
        Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep and at most 40" (1 meter)
        wide. <OutboundLink href="mailto:support@hiome.com?subject=Double%20door%20support">Let us know</OutboundLink> if you have
        extra-wide or double doors.
      </p>
      <p>
        If you have any questions, feel free to <OutboundLink href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">send us a picture
        of your door frame</OutboundLink> and we'll let you know.
      </p>
    </FaqItem>

    <FaqItem title="How many Hiome Door sensors do I need?">
      <p>
        You can get started with just one, but Hiome works better with more sensors. Make your lights follow you from room to room
        by adding a Hiome Door sensor on every door.
      </p>
    </FaqItem>

    <FaqItem title="Can I buy more Hiome Door sensors later?">
      <p>
        Of course! Once we have fulfilled all pre-orders, we'll open up orders for additional sensors without the Starter Kit.
      </p>
    </FaqItem>

    <p style={{fontWeight: `bold`}}><Link to="/faq">More questions &#x2192;</Link></p>

    <p style={{marginTop: `4em`}} className="legal"><sup>1</sup> HomeKit and SmartThings support pending certification from Apple and Samsung, respectively.</p>
  </Layout>
)

export default OrderPage
