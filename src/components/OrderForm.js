import React, { Component } from 'react'
import { Link } from 'gatsby'
import config from '../../gatsby-config'

import Loader from './Loader'

class OrderForm extends Component {
  state = {
    doorCount: 6,
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

    if (c < 2) {
      this.setState({error: "Sorry, your house must have at least 2 doors."})
    } else
      this.setState({doorCount: c, error: null})
  }

  doorPrice() {
    return this.state.doorCount * config.siteMetadata.prices.door
  }

  subtotal() {
    return this.doorPrice() + config.siteMetadata.prices.core
  }

  discount() {
    return this.subtotal()/3
  }

  total() {
    return this.subtotal() - this.discount()
  }

  deposit() {
    return this.total() * 0.2
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
        <table>
          <tbody>
            <tr>
              <th style={{width: `50px`}}></th>
              <th>Item</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>1</td>
              <td><Link to="/core">Hiome Core</Link></td>
              <td>${config.siteMetadata.prices.core}</td>
            </tr>
            <tr>
              <td>{this.state.doorCount}</td>
              <td><Link to="/door">Hiome Door</Link></td>
              <td>${this.doorPrice()}</td>
            </tr>
            <tr style={{borderTop: `1px solid hsla(0, 0%, 0%, 0.12)`}}>
              <td colSpan="2" style={{textAlign: `right`}}>Subtotal</td>
              <td>${this.subtotal()}</td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign: `right`, paddingTop: `0`}}>Beta Testing Discount</td>
              <td style={{color: `green`, paddingTop: `0`}}>-${this.discount()}</td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign: `right`, paddingTop: `0`}}>Total (USD)</td>
              <td style={{paddingTop: `0`}}>${this.total()}</td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign: `right`, fontWeight: `bold`, paddingTop: `0`}}>20% Deposit To Reserve Today</td>
              <td style={{paddingTop: `0`, fontWeight: `bold`}}>${this.deposit()}</td>
            </tr>
          </tbody>
        </table>

        {this.renderStripe()}
      </div>
    )
  }
}

export default OrderForm
