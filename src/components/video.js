import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import media from '../media/HiomeDemo.mp4'

class Video extends Component {
  state = {
    playing: false
  }

  getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
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
    document.getElementById("heroVid").play()
    this.playing()
  }
  playing = () => {
    if (!this.state.playing) {
      document.getElementById("watch").style.opacity = 0
      setTimeout(() => {
        this.setState({playing: true})
      }, 1000)
    }
  }
  scroll = () => {
    this.doScrolling("#welcome", 1000)
  }

  renderButton() {
    if (this.state.playing) {
      return (
        <svg className="fadeIn clickable" style={{marginTop: `-26px`, marginBottom: `20px`}} onClick={this.scroll} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100"><g><g style={{fill:`#000000`}}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><title>Scroll Down</title><path d="M50,58.62h0A2.23,2.23,0,0,1,48.43,58L35.64,45.18A2.23,2.23,0,0,1,38.79,42L50,53.25,61.21,42a2.23,2.23,0,0,1,3.15,3.15L51.57,58A2.23,2.23,0,0,1,50,58.62Z"></path></svg></g></g></svg>
      )
    } else {
      return (
        <button id="watch" className="secondary fadeOutable" style={{marginBottom: `3rem`}} onClick={this.play}>Watch Video</button>
      )
    }
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
            <video controls width="100%" preload="auto" poster={data.placeholderImage.childImageSharp.fixed.src} style={{
              boxShadow: `2px 2px 15px #ccc`,
              marginBottom: `2rem`,
              backgroundColor: `#ccc`,
            }} id="heroVid" onPlay={this.playing}>
              <source
                src={media}
                type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
            <div style={{textAlign: `center`}}>
              {this.renderButton()}
            </div>
          </>
        )}
      />
    )
  }
}

export default Video
