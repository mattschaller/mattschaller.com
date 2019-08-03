import React from "react"

function Hero({ title, subtitle }) {

  const heroTitle = title || ''
  const heroSubTitle = subtitle || ''

  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {heroTitle}
          </h1>
          <h2 class="subtitle">
            {heroSubTitle}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
