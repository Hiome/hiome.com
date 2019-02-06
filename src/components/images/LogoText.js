import React from 'react'
import PropTypes from 'prop-types'

const LogoText = ({width, height, style}) => (
  <svg width={width} height={height} style={style} version="1.1" viewBox="0 0 104 23" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
    <path id="texta" d="m0.335 0.76h2.16v9.21h11.58v-9.21h2.16v21.24h-2.16v-10.05h-11.58v10.05h-2.16v-21.24zm25.82 21.24h-2.16v-21.24h2.16v21.24zm26.12-10.62c0-1.22-0.2-2.385-0.6-3.495s-0.975-2.085-1.725-2.925-1.665-1.51-2.745-2.01-2.3-0.75-3.66-0.75-2.58 0.25-3.66 0.75-1.995 1.17-2.745 2.01-1.325 1.815-1.725 2.925-0.6 2.275-0.6 3.495 0.2 2.385 0.6 3.495c0.4 1.11 0.975 2.085 1.725 2.925s1.665 1.51 2.745 2.01 2.3 0.75 3.66 0.75 2.58-0.25 3.66-0.75 1.995-1.17 2.745-2.01 1.325-1.815 1.725-2.925c0.4-1.11 0.6-2.275 0.6-3.495zm2.34 0c0 1.62-0.28 3.11-0.84 4.47s-1.335 2.535-2.325 3.525c-0.99 0.99-2.16 1.765-3.51 2.325-1.35 0.56-2.815 0.84-4.395 0.84s-3.045-0.28-4.395-0.84c-1.35-0.56-2.52-1.335-3.51-2.325-0.99-0.99-1.765-2.165-2.325-3.525s-0.84-2.85-0.84-4.47 0.28-3.11 0.84-4.47 1.335-2.535 2.325-3.525c0.99-0.99 2.16-1.765 3.51-2.325 1.35-0.56 2.815-0.84 4.395-0.84s3.045 0.28 4.395 0.84c1.35 0.56 2.52 1.335 3.51 2.325 0.99 0.99 1.765 2.165 2.325 3.525s0.84 2.85 0.84 4.47zm16.79 6.66l7.17-17.28h3.3v21.24h-2.16v-18.36h-0.06l-7.68 18.36h-1.14l-7.68-18.36h-0.06v18.36h-2.16v-21.24h3.3l7.17 17.28zm20.39 1.98h11.37v1.98h-13.53v-21.24h13.17v1.98h-11.01v7.23h10.29v1.98h-10.29v8.07z"/>
    </defs>
    <g fill="none" fillRule="evenodd">
    <mask id="textb" fill="white">
    <use xlinkHref="#texta"/>
    </mask>
    <use fill="#FFFFFF" xlinkHref="#texta"/>
    <g fill="#000" mask="url(#textb)">
    <g transform="translate(-3 -12)">
    <rect width="108" height="45"/>
    </g>
    </g>
    </g>
  </svg>
)

LogoText.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
}

LogoText.defaultProps = {
  width: "104px",
  height: "23px",
  style: {},
}

export default LogoText
