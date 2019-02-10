import React, { Component } from 'react'
import { Link } from 'gatsby'
import config from '../../gatsby-config'

import Loader from './Loader'

class OrderForm extends Component {
  state = {
    doorCount: 8,
    error: null,
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
      stripe: window.Stripe(config.siteMetadata.stripe_key, {
        betas: ["checkout_beta_4"],
      })
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.state.stripe.redirectToCheckout({
      items: [
        { sku: "sku_EU4g5jomWWVCQ8", quantity: 1 },
        { sku: "sku_EU4sF9iIfSKscu", quantity: this.state.doorCount }
      ],
      successUrl: 'https://hiome.com/success',
      cancelUrl: 'https://hiome.com/order',
    })

    if (error) {
      console.error("Error:", error)
    }
  }

  updateCount = (e) => {
    const c = parseInt(e.target.value)
    if (isNaN(c)) return

    if (c < 1) {
      this.setState({error: "It's going to be hard to use Hiome without any doors."})
    } else if (c < 2) {
      this.setState({error: "Just one door? You should have at least a front door and a bathroom door."})
    } else
      this.setState({doorCount: c, error: null})
  }

  subtotal() {
    return this.state.doorCount * 90 + 120
  }

  deposit() {
    return this.subtotal() * 0.2
  }

  renderError() {
    if (this.state.error) {
      return (
        <p className="error">{this.state.error}</p>
      )
    }
  }

  renderStripe() {
    if (this.state.stripe) {
      return (
        <div style={{textAlign: `center`}}>
          <button className="primary" onClick={e => this.redirectToCheckout(e)}>Reserve Now</button>
        </div>
      )
    } else {
      return (
        <Loader size="50px" />
      )
    }
  }

  render() {
    return (
      <div>
        <noscript>Please <a href="http://activatejavascript.org/en/instructions/" rel="noopener noreferrer" target="_blank">enable JavaScript</a> to use this form.</noscript>
        <p>
          <strong>How many doors are in your home?</strong>
          <input type="number" defaultValue={this.state.doorCount} min="2" max="20" onChange={this.updateCount} style={{
            width: `70px`,
            marginLeft: `20px`,
          }}/>
        </p>
        <p style={{
          fontSize: `0.8em`,
          lineHeight: `1.5em`,
          marginTop: `-15px`,
        }}>
          Count all doors that separate distinct rooms, including your front door. <Link to="/door#compatibility">Check compatibility</Link>
        </p>
        {this.renderError()}
        <p>
          <Link to="/core">Hiome Core</Link> with {this.state.doorCount} <Link to="/door">Hiome Door</Link> sensors is
          ${this.subtotal()} for your whole home. Reserve your order now with a ${this.deposit()} deposit.
        </p>

        {this.renderStripe()}
      </div>
    )
  }
}

export default OrderForm
