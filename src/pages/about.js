import React from 'react'

import EmailSignup from '../components/EmailSignup'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About Hiome" />

    <p>
      We're a team of engineers based in Chicago, IL who enjoy smart homes, great tech, and long walks on the beach.
    </p>
    <p>
      We believe that smart homes are inevitable, but they need to be easier first. Ultimately, making something "smart" should be
      additive to your experience, not make your life harder. Sadly, that's not always been the case. We got tired of seeing people
      struggle with bathroom lights turning off while they were showering or bedroom lights turning on when they moved in their sleep.
      So we built Hiome Door.
    </p>
    <p>
      There are a few principles that are core to our beliefs and have guided how we design our products.
    </p>

    <h4>Technology should be invisible.</h4>
    <p>
      This is true everywhere, but especially so in the context of your home. Few people want to think
      about debugging something when they come home. Instead, technology should be transparently woven into the fabric of your home, making
      your life easier without you even realizing it, like a tailwind helping you along in a race. This is the opposite of our current
      reality, where tech constantly needs to be touched or spoken to.
    </p>

    <h4>Technology should protect us.</h4>
    <p>
      Privacy is a human right. What you do in your home is your business, and it should not be monetized or weaponized. We should not
      have to decide whether it's worth trading privacy for convenience. As Ben Franklin said,
      "Those who would give up essential privacy to purchase a smart home, deserve neither privacy nor a smart home," or something like
      that. We won't let you down, Ben.
    </p>

    <h4>Technology should delight us.</h4>
    <p>
      In order to delight, technology must anticipate our needs and dynamically adapt to us, not the other way around. The best technologies
      augment our lives without requiring major changes in our behavior. At Hiome, we're working hard to make new technologies and workflows
      that feel enchanted at first and obvious in hindsight.
    </p>

    <p>
      Want to stay in the loop? Sign up for email updates below
      or <a href="https://twitter.com/hiomeai" rel="noopener noreferrer" target="_blank">follow us on Twitter</a>!
    </p>

    <EmailSignup />
  </Layout>
)

export default AboutPage
