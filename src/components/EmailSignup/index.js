import React, { Component } from 'react'

import './styles.css'

class EmailSignup extends Component {
  state = {
    error: null,
  }
  validateEmail = (e) => {
    const email = e.target.children[0].value.trim()
    if (!/.+@.+/.test(email)) {
      e.preventDefault()
      this.setState({error: `Please enter a valid email address.`})
    }
  }

  renderError() {
    if (this.state.error) {
      return (
        <p className="error">{this.state.error}</p>
      )
    }
  }

  render() {
    return (
      <div id="email_signup">
        <form action="https://rdd4n7cqml.execute-api.us-east-1.amazonaws.com/default/email_signup" method="POST" onSubmit={this.validateEmail}>
          <input type="email" id="email" name="email" placeholder="you@email.com" required />
          <input type="text" id="full_name" name="first_name" defaultValue="" placeholder="Enter your full name" />
          <input type="hidden" name="last_name" defaultValue="" />
          <button type="submit" className="secondary" value="Sign Up">Notify Me</button>
          {this.renderError()}
        </form>
      </div>
    )
  }
}

export default EmailSignup
