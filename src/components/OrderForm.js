import React, { Component } from 'react'
import { Link } from 'gatsby'

import Loader from './Loader'

class OrderForm extends Component {
  state = {
    doorCount: 7,
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
      stripe: window.Stripe('pk_live_GGLAckmkxax3TR04QeipRU7G', {
        betas: ["checkout_beta_4"],
      })
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const skus = [
      null, null,
      'sku_EVLfTUAS1ScfS4',
      'sku_EVLfyLFiYrhHrL',
      'sku_EVLf8icunzjXUc',
      'sku_EVLfzBQJacIWb5',
      'sku_EVLf7ONHv1Tr9a',
      'sku_EVLftSh6wyjnbS',
      'sku_EVLgOtMOlrotBE',
      'sku_EVLgVqu6EY49Ra',
      'sku_EVLg2GTPCXGSZV',
      'sku_EVLg7JUzEbc4T3',
      'sku_EVLgCRVkLTMW17',
      'sku_EVLgxYQwdy1FtF',
      'sku_EVLgSOXV1j7Bx2',
      'sku_EVLhH9III498qR',
      'sku_EVLhij6VG6SEwk',
      'sku_EVLhsfZJCkfk0c',
      'sku_EVLheCxgYOqg3g',
      'sku_EVLhU7DcJkaqak',
      'sku_EVLhnxCRjO15Qr'
    ]
    const { error } = await this.state.stripe.redirectToCheckout({
      items: [{ sku: skus[this.state.doorCount], quantity: 1 }],
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
      this.setState({error: 'no_door'})
    } else if (c < 2) {
      this.setState({error: 'one_door'})
    } else if (c > 20) {
      this.setState({error: 'many_doors'})
    } else
      this.setState({doorCount: c, error: null})
  }

  subtotal() {
    return this.state.doorCount * 80 + 120
  }

  renderError() {
    if (this.state.error === 'no_door') {
      return (
        <p className="error">It's going to be hard to use Hiome without any doors.</p>
      )
    } else if (this.state.error === 'one_door') {
      return (
        <p className="error">Just one door? We're assuming you've got at least a front door and a bathroom door.</p>
      )
    } else if (this.state.error === 'many_doors') {
      return (
        <p className="error">That's a lot of doors! <a href="mailto:sales@hiome.com">Contact us</a> for a custom order.</p>
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
          Hiome learns best when it can sense your whole home. Count all doors that separate distinct rooms, including your front door. <Link to="/door#compatibility">Check compatibility</Link>
        </p>
        {this.renderError()}
        <p>
          <Link to="/core">Hiome Core</Link> with {this.state.doorCount} <Link to="/door">Hiome Door</Link> sensors is
          ${this.subtotal()} for your whole home. Estimated delivery is currently April 2019. Reserve yours now for $150.
        </p>

        {this.renderStripe()}
      </div>
    )
  }
}

export default OrderForm
