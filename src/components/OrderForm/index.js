import React, { Component } from 'react'

import Loader from '../Loader'

import './styles.css'

class OrderForm extends Component {
  state = {
    doorCount: 1,
    stripe: null,
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
      stripe: window.Stripe('pk_live_GGLAckmkxax3TR04QeipRU7G', {
        betas: ["checkout_beta_4"],
      })
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const items = [{ sku: 'sku_Ea6jaC7hRjeNtZ', quantity: 1 }]
    if (this.state.doorCount > 1) {
      items[1] = { sku: 'sku_ERMYCpqKwfgzcv', quantity: this.state.doorCount - 1 }
    }
    const { error } = await this.state.stripe.redirectToCheckout({
      items: items,
      successUrl: 'https://hiome.com/success',
      cancelUrl: 'https://hiome.com/order',
    })

    if (error) {
      console.error("Error:", error)
    }
  }

  updateCount = (e) => {
    const c = parseInt(e.target.value)
    this.setState({doorCount: c})
  }

  subtotal() {
    return this.state.doorCount * 79 + 80
  }

  renderStripe() {
    if (this.state.stripe) {
      return (
        <div style={{textAlign: `center`, marginBottom: `100px`}}>
          <button className="primary" onClick={e => this.redirectToCheckout(e)}>Checkout</button>
        </div>
      )
    } else {
      return (
        <Loader size="50px" />
      )
    }
  }

  renderOptions() {
    const rows = []
    for (let i = 1; i <= 40; i++) {
      rows.push(<option key={`qty${i}`} value={i}>{i}</option>)
    }
    return rows
  }

  render() {
    return (
      <div>
        <ul className="OrderForm__Features">
          <li>True occupancy detection & door open/close sensing</li>
          <li>Works with HomeKit<sup>1</sup>, SmartThings<sup>1</sup>, and MQTT</li>
          <li>90 day money back guarantee, no questions asked</li>
          <li>Free shipping to US and Canada</li>
          <li>Estimated delivery: August 2019</li>
          <li style={{fontWeight: `bold`}}>
            Includes Hiome Core, <select onChange={this.updateCount} style={{marginLeft: `5px`, marginRight: `5px`}}>
              {this.renderOptions()}
            </select> Hiome Door sensor{this.state.doorCount > 1 ? 's' : ''}, and {Math.ceil(this.state.doorCount/8) * 180}ft ({Math.ceil(this.state.doorCount/8) * 55}m) of gaffer tape
          </li>
        </ul>

        <p style={{
          textAlign: `center`,
          fontWeight: `bold`,
          fontSize: `2em`,
          margin: `3rem 0 2rem 0`,
        }}>${this.subtotal()}</p>

        <noscript>Please <a href="http://activatejavascript.org/en/instructions/" rel="noopener noreferrer" target="_blank">enable JavaScript</a> to checkout.</noscript>
        {this.renderStripe()}

        <p className="legal"><sup>1</sup> HomeKit and SmartThings support pending certification from Apple and Samsung, respectively.</p>
      </div>
    )
  }
}

export default OrderForm
