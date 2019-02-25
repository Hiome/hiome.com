import React, { Component } from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import './styles.css'

import media from '../../media/HiomeDemo.mp4'

class Video extends Component {
  getElementY(element) {
    const el = element.getBoundingClientRect()
    // center video in screen
    return window.pageYOffset + el.top + (el.bottom - el.top)/2 - window.innerHeight/2
  }

  doScrolling(element, duration) {
    const startingY = window.pageYOffset
    const elementY = this.getElementY(element)
    // If element is close to page's bottom then window will scroll only to some position above the element.
    const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
    const diff = targetY - startingY
    if (!diff) return

    // Easing function: easeInOutCubic from https://gist.github.com/gre/1650294
    const easing = (t) => ( t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 )
    let start
    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      // Elapsed miliseconds since start of scrolling.
      const time = timestamp - start
      // Get percent of completion in range [0, 1].
      let percent = Math.min(time / duration, 1)
      // Apply the easing.
      percent = easing(percent)

      // Do the scroll.
      window.scrollTo(0, startingY + diff * percent)

      // Proceed to next step if there's time left.
      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }

  play = () => {
    const vid = document.getElementById("heroVid")
    vid.play()
    this.doScrolling(vid, 1000)
  }

  playing = () => {
    const watchBtn = document.getElementById('watch')
    watchBtn.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out, border-color 1s ease-in-out"
    watchBtn.classList.add('disabled')
  }

  renderButton() {
    return (
      <div className="VideoButtons">
        <span>
          <button id="watch" className="secondary" onClick={this.play}>Watch Video</button>
        </span>
        <span>
          <Link className="primary" to="/order">Order Now</Link>
        </span>
      </div>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "poster.png" }) {
              childImageSharp {
                fixed(width: 1920) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {this.renderButton()}
            <video controls width="100%" preload="auto" poster={data.placeholderImage.childImageSharp.fixed.src} style={{
              boxShadow: `2px 2px 15px #ccc`,
              marginBottom: `2rem`,
              backgroundColor: `#ccc`,
            }} id="heroVid" onPlay={this.playing}>
              <source
                src="https://d2gdvz35a3rzzk.cloudfront.net/Hiome%20Demo4k.mp4.m3u8"
                type="video/mp4" />
              <source
                src={media}
                type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </>
        )}
      />
    )
  }
}

export default Video
