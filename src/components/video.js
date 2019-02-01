import React from 'react'

import poster from "../images/poster.png"
import media from "../media/HiomeDemo.mp4"

const Video = () => (
  <video controls width="100%" preload="auto" poster={poster} style={{boxShadow: `2px 2px 15px #ccc`, marginBottom: `2rem`}}>
    <source
      src={media}
      type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
)

export default Video
