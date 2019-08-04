import React from "react"
import heroStyles from "./hero.module.css"

function Hero({ title, subtitle, full }) {

  const heroTitle = title || ''
  const heroSubTitle = subtitle || ''
  

  // Hack to conditionally add a hero-foot on homepage only
  let heroClasses = (full === 'true') ? 'is-fullheight-with-navbar' : 'is-medium';
  let heroFooter = (
    <div class="hero-foot">
      <p class="is-pulled-right is-size-7">
        {`© `}
        {new Date().getFullYear()} 
        {` Matthew Schaller. Built with `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` & `}
        <a href="https://www.bulma.io">Bulma</a>
        {` on top of `}
        <a href="https://www.aws.com">AWS</a>.
      </p>
    </div>
  )
  heroFooter = (full === 'true') ? heroFooter : '';

  return (
    <section className={`hero is-primary ${heroClasses} ${heroStyles.hero}`}>
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
      {heroFooter}
    </section>
  )
}

export default Hero
