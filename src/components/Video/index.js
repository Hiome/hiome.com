import React, { Component } from 'react'
import { Link } from 'gatsby'
import Hls from 'hls.js'

import VideoPosterImg from '../images/VideoPosterImg'

import './styles.css'

import media from '../../media/HiomeDemo.mp4'

class Video extends Component {
  componentDidMount() {
    const video = document.getElementById('heroVid')
    const src = 'https://d2gdvz35a3rzzk.cloudfront.net/WelcomeHiome2.m3u8'
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // native HLS support
      video.src = src
    } else if (Hls.isSupported()) {
      // fallback to hls.js
      const hls = new Hls();
      hls.loadSource(src)
      hls.attachMedia(video)
    } else {
      // fallback to downloading whole media file like a chump
      video.src = media
    }
  }

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
    this.playing()
    this.doScrolling(document.getElementById("heroVid"), 1000)
  }

  playing = () => {
    const poster = document.getElementById('posterWrapper')
    const video = document.getElementById('heroVid')
    poster.style.display = 'none'
    video.style.display = 'block'
    video.play()

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
      <>
        {this.renderButton()}
        <VideoPosterImg onclick={this.playing} />
        <video controls width="100%" preload="auto" id="heroVid" style={{
          boxShadow: `2px 2px 15px #ccc`,
          marginBottom: `2rem`,
          backgroundColor: `#ccc`,
          display: `none`
        }}>
          Sorry, your browser doesn't support embedded videos. <a href="https://www.youtube.com/watch?v=PLBdi5frOGA">Watch it on YouTube</a>.
        </video>
      </>
    )
  }
}

export default Video
