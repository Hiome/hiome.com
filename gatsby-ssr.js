/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script key="ackee" async
      src="https://a.hiome.com/tracker.js"
      data-ackee-server="https://a.hiome.com"
      data-ackee-domain-id="9c3148e7-5f47-4e65-a952-afbedd02e0ac" />
  ])
}
