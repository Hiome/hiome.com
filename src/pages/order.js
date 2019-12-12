import React, { Component } from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { Steps, Card, Button, Icon, Divider, Slider, InputNumber, Tag, message } from 'antd';

import Layout from '../components/layout'
import FeatureBox from '../components/FeatureBox'
import FaqItem from '../components/FaqItem'
import SEO from '../components/seo'

import shipping_img from '../images/shipping.svg'
import guarantee_img from '../images/guarantee.svg'
import calendar_img from '../images/calendar.svg'

const { Step } = Steps;

class OrderPage extends Component {
  state = {
    currentStep: 0,
    wired_qty: 0,
    recessed_qty: 0,
    battery_qty: 0,
    stripe: null,
    checkoutLoading: false,
    customize: false
  }

  componentDidMount() {
    if (window.Stripe) {
      this.loadStripe()
    } else {
      document.querySelector('#stripe-js').addEventListener('load', this.loadStripe)
    }
  }

  loadStripe = () => {
    this.setState({
      stripe: window.Stripe('pk_live_GGLAckmkxax3TR04QeipRU7G')
    })
  }

  redirectToCheckout = () => {
    let base_sku = null
    const total = this.totalQty()
         if (total < 2)  base_sku = 'sku_FxyRP6wkGEbmQC'  // Hiome Core + 1 sensor
    else if (total < 5)  base_sku = 'sku_FxySlrPxEeKz5K'  // Hiome Core + 2 sensors
    else if (total < 10) base_sku = 'sku_FxyT6RxXACezCV'  // Hiome Core + 5 sensors
    else                 base_sku = 'sku_FxyTrQ99XhJows'  // Hiome Core + 10 sensors

    const items = [{sku: base_sku, quantity: 1}]
    if (this.state.wired_qty > 0)     // Hiome Door (Wired)
      items.push({sku: 'sku_FxyV8UosNYW8Nq', quantity: this.state.wired_qty})
    if (this.state.recessed_qty > 0)  // Hiome Door (Recessed)
      items.push({sku: 'sku_FxyVgWVv8tv2LS', quantity: this.state.recessed_qty})
    if (this.state.battery_qty > 0)   // Hiome PowerPack
      items.push({sku: 'sku_FxyV7ja1dme6YQ', quantity: this.state.battery_qty})
    if (this.shippingPrice() > 0)     // shipping sku
      items.push({sku: 'sku_FxyWD2Uj2x1Bei', quantity: 1})

    this.setState({checkoutLoading: true})
    this.state.stripe.redirectToCheckout({
      items: items,
      successUrl: 'https://hiome.com/success',
      cancelUrl: 'https://hiome.com/order',
      billingAddressCollection: 'required'
    }).then(result => {
      if (result.error) {
        message.error(result.error.message, 10)
      }
      this.setState({checkoutLoading: false})
    }).catch(error => {
      message.error('Sorry, the checkout failed. Please try again or email support@hiome.com', 10)
      this.setState({checkoutLoading: false})
    })
  }

  totalQty() {
    return this.state.wired_qty + this.state.recessed_qty
  }

  batteryPrice(qty) {
    return qty*39
  }

  subtotal() {
    const total = this.totalQty()
    let price = 0
         if (total < 2)  price = 175                    // 1 sensor
    else if (total < 5)  price = 230 + 79*(total - 2)   // 2-4 sensors
    else if (total < 10) price = 450 + 79*(total - 5)   // 5-9 sensors
    else                 price = 799 + 79*(total - 10)  // 10+ sensors

    return price + this.batteryPrice(this.state.battery_qty)            // add any battery packs
  }

  shippingPrice() {
    return this.subtotal() > 199 ? 0 : 12.99
  }

  shippingLabel() {
    const price = this.shippingPrice()
    return price === 0 ? 'FREE' : `$${price}`
  }

  totalPrice() {
    return this.subtotal() + this.shippingPrice()
  }

  chooseKit = (size) => {
    this.setState({wired_qty: size, currentStep: 1})
    document.getElementById("stepsNav").scrollIntoView()
  }

  chooseWired = () => {
    this.setState({currentStep: 2})
    document.getElementById("stepsNav").scrollIntoView()
  }

  chooseRecessed = () => {
    this.setState({recessed_qty: this.state.wired_qty, wired_qty: 0, currentStep: 2})
    document.getElementById("stepsNav").scrollIntoView()
  }

  chooseBattery = () => {
    this.setState({battery_qty: this.state.wired_qty, currentStep: 2})
    document.getElementById("stepsNav").scrollIntoView()
  }

  chooseCustomize = () => {
    this.setState({customize: true})
    document.getElementById("stepsNav").scrollIntoView()
  }

  changeWiredSlider = val => {
    val = Math.max(val, this.state.battery_qty)
    if (this.state.recessed_qty + val <= 0) val = 1
    this.setState({wired_qty: val})
  }

  changeRecessedSlider = val => {
    if (this.state.wired_qty + val <= 0) val = 1
    this.setState({recessed_qty: val})
  }

  changeBatterySlider = val => {
    this.setState({battery_qty: val, wired_qty: Math.max(val, this.state.wired_qty)})
  }

  renderChoose() {
    return <>
      <p className="subtitle" style={{color: `hsla(0, 0%, 0%, 0.8)`}}>Choose your starter kit.</p>
      <p className="subsubtitle">You need one sensor per door.</p>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={() => this.chooseKit(1)}>
        <h4 style={{lineHeight: `1.4rem`}}>Hiome Core + 1 Hiome Door sensor</h4>
        <p>Try out Hiome in a small room with a single door.</p>
        <p><strong>$175</strong></p>
      </Card>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={() => this.chooseKit(2)}>
        <h4 style={{lineHeight: `1.4rem`}}>Hiome Core + 2 Hiome Door sensors <Tag color="#f50">Most Popular</Tag></h4>
        <p>Automate a larger room by adding Hiome to all of its doors.</p>
        <p><strong>$230</strong></p>
      </Card>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={() => this.chooseKit(5)}>
        <h4 style={{lineHeight: `1.4rem`}}>Hiome Core + 5 Hiome Door sensors</h4>
        <p>Cover multiple rooms to make your lights follow you from room to room!</p>
        <p><strong>$450</strong></p>
      </Card>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={() => this.chooseKit(10)}>
        <h4 style={{lineHeight: `1.4rem`}}>Hiome Core + 10 Hiome Door sensors</h4>
        <p>Automate your whole home for a truly smart home experience.</p>
        <p><strong>$799</strong></p>
      </Card>
    </>
  }

  renderStyle() {
    return <>
      <p className="subtitle" style={{color: `hsla(0, 0%, 0%, 0.8)`}}>Choose how to power Hiome Door.</p>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={this.chooseWired}>
        <h4 style={{lineHeight: `1.4rem`}}>Wired <Tag color="#f50">Most Popular</Tag></h4>
        <p>Easily install Hiome Door in minutes and forget about it!</p>
      </Card>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={this.chooseRecessed}>
        <h4 style={{lineHeight: `1.4rem`}}>Recessed</h4>
        <p>Embed Hiome Door into your door frame for the cleanest installation.</p>
      </Card>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={this.chooseBattery}>
        <h4 style={{lineHeight: `1.4rem`}}>Battery</h4>
        <p>Add {this.state.wired_qty} Hiome PowerPack batteries to power Hiome Door without a power outlet.</p>
        <p><strong>+${this.batteryPrice(this.state.wired_qty)}, ships in January</strong></p>
      </Card>

      <Card style={{width: `100%`, margin: `20px auto`}} hoverable={true} onClick={this.chooseCustomize}>
        <h4 style={{lineHeight: `1.4rem`}}>Mix and Match</h4>
        <p>Customize your starter kit to your needs.</p>
      </Card>
    </>
  }

  wiredSensorsTxt() {
    if (this.state.wired_qty === 0) return null
    if (this.state.wired_qty === 1) return "1 wired Hiome Door sensor,"
    return `${this.state.wired_qty} wired Hiome Door sensors,`
  }

  recessedSensorsTxt() {
    if (this.state.recessed_qty === 0) return null
    if (this.state.recessed_qty === 1) return "1 recessed Hiome Door sensor,"
    return `${this.state.recessed_qty} recessed Hiome Door sensors,`
  }

  batterySensorsTxt() {
    if (this.state.battery_qty === 0) return null
    if (this.state.battery_qty === 1) return "1 Hiome PowerPack battery,"
    return `${this.state.battery_qty} Hiome PowerPack batteries,`
  }

  renderCustomize() {
    return <>
      <p className="subtitle" style={{color: `hsla(0, 0%, 0%, 0.8)`}}>{this.state.customize ? 'Customize your kit for your home.' : 'Review your order.'}</p>
      <div className="orderLineItem" style={{margin: `20px 0`}}>
        <h4><InputNumber size="large" style={{width: `60px`, marginRight: `10px`}} defaultValue={1} min={0} max={50} disabled /> Hiome Core</h4>
        <p style={{marginLeft: `75px`, fontSize: `0.9em`}}>Hiome Core keeps your data locally in your home and syncs your sensors to work with multiple doors at once.</p>
        <Divider />
      </div>
      <div className="orderLineItem" style={{margin: `20px 0`, display: ((this.state.customize || this.state.wired_qty > 0) ? `block` : `none`)}}>
        <h4>
          <InputNumber size="large" style={{width: `60px`, marginRight: `10px`}} value={this.state.wired_qty} min={0} max={50} onChange={this.changeWiredSlider} />
          Hiome Door (Wired)
        </h4>
        <p style={{marginLeft: `75px`, fontSize: `0.9em`}}>Get true occupancy counting and door open/close sensing on each door with a Hiome Door sensor.<br/><br/>$79 each</p>
        <Slider value={this.state.wired_qty} min={0} max={50} onChange={this.changeWiredSlider} />
      </div>
      <div className="orderLineItem" style={{margin: `20px 0`, display: ((this.state.customize || this.state.recessed_qty > 0) ? `block` : `none`)}}>
        <h4>
          <InputNumber size="large" style={{width: `60px`, marginRight: `10px`}} value={this.state.recessed_qty} min={0} max={50} onChange={this.changeRecessedSlider} />
          Hiome Door (Recessed)
        </h4>
        <p style={{marginLeft: `75px`, fontSize: `0.9em`}}>All the benefits of Hiome Door, in a package designed for embedding into your door frame.<br/><br/>$79 each</p>
        <Slider value={this.state.recessed_qty} min={0} max={50} onChange={this.changeRecessedSlider} />
      </div>
      <div className="orderLineItem" style={{margin: `20px 0`, display: ((this.state.customize || this.state.battery_qty > 0) ? `block` : `none`)}}>
        <h4>
          <InputNumber size="large" style={{width: `60px`, marginRight: `10px`}} value={this.state.battery_qty} min={0} max={50} onChange={this.changeBatterySlider} />
          Hiome PowerPack
        </h4>
        <p style={{marginLeft: `75px`, fontSize: `0.9em`}}>A rechargeable battery pack to power your Hiome Door sensor for over 1 month without a nearby power outlet. <strong>Ships in January.</strong><br/><br/>$39 each</p>
        <Slider value={this.state.battery_qty} min={0} max={50} onChange={this.changeBatterySlider} />
      </div>

      <p style={{fontSize: `0.75em`, color: `#a0a0a0`, marginTop: `50px`}}>
        Your kit has 1 Hiome Core, {this.wiredSensorsTxt()} {this.recessedSensorsTxt()} {this.batterySensorsTxt()} {this.totalQty()} door contact magnet{this.totalQty() > 1 ? 's' : ''}, {this.state.wired_qty + 1 - this.state.battery_qty} power cable{this.state.wired_qty - this.state.battery_qty === 0 ? '' : 's'}, 1 ethernet cable, and mounting equipment.
      </p>

      <Divider />

      <p style={{float: `right`}}>{this.shippingLabel()}</p>
      <p>Shipping</p>
      <p style={{float: `right`}}><strong>${this.totalPrice()}</strong></p>
      <p><strong>Total</strong></p>
      <div style={{textAlign: `right`}}>
        <Button type="primary" size="large"
          onClick={this.redirectToCheckout}
          loading={this.state.checkoutLoading || this.state.stripe === null}
          disabled={this.totalQty() < 1}>
          Checkout <Icon type="arrow-right" />
        </Button>
      </div>
    </>
  }

  renderStep() {
    if (this.state.currentStep === 0) return this.renderChoose()
    if (this.state.customize || this.state.currentStep === 2) return this.renderCustomize()
    return this.renderStyle()
  }

  changeStep = newStep => {
    if (newStep === 0)
      this.setState({currentStep: newStep, customize: false, wired_qty: 0, recessed_qty: 0, battery_qty: 0})
    else
      this.setState({currentStep: newStep, customize: false, wired_qty: Math.max(this.state.wired_qty, this.state.recessed_qty), recessed_qty: 0, battery_qty: 0})
    document.getElementById("stepsNav").scrollIntoView()
  }

  render() {
    return <Layout>
      <SEO title="Order Hiome" />

      <h1 style={{lineHeight: `2em`}}>Hiome Starter Kit <span className="blackLabel">Pre-Order</span></h1>
      <Steps size="small" current={this.state.currentStep} style={{marginTop: `-30px`, marginBottom: `100px`}} labelPlacement="vertical"
            onChange={this.changeStep} id="stepsNav">
        <Step title="Size" />
        <Step title="Style" disabled={this.state.currentStep === 0}/>
        <Step title="Checkout" disabled={true}/>
      </Steps>

      { this.renderStep() }

      <div style={{marginTop: `50px`}}>
        <FeatureBox icon={shipping_img} title={<span style={{fontSize: `0.9em`}}>Free Shipping</span>}>
          Free shipping for orders over $199 within the United States.
        </FeatureBox>

        <FeatureBox icon={guarantee_img} title={<span style={{fontSize: `0.9em`}}>Try for 100 Days</span>}>
          If you don't love it, we'll refund you, no questions asked.
        </FeatureBox>

        <FeatureBox icon={calendar_img} title={<span style={{fontSize: `0.9em`}}>Ships in January</span>}>
          Shipping time is based on the number of orders ahead of you.
        </FeatureBox>
      </div>

      <h4 style={{marginTop: `3em`, marginBottom: `3em`}}>Frequently Asked Questions</h4>

      <FaqItem title="Will Hiome Door fit on my door?">
        <p>
          Hiome Door is designed to fit most standard door frames. Your frame needs to be at least 1" (2.5cm) deep, at most 80" (2 meters)
          wide, and between 6-12ft (1.8-3.6 meters) tall. An actual door is not required, just the doorway is important. If you're not sure,
          feel free to <OutboundLink href="mailto:support@hiome.com?subject=Check%20my%20door%27s%20compatibility">email us
          a picture of your door frame</OutboundLink> and we'll let you know!
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
    </Layout>
  }
}

export default OrderPage
