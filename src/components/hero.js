import React from "react"
import heroStyles from "./hero.module.css"

function Hero({ title, subtitle, fullsize }) {
  const heroTitle = title || ""
  const heroSubTitle = subtitle || ""

  // Hack to conditionally add a hero-foot on homepage only
  let heroClasses =
    fullsize === "true" ? "is-fullheight-with-navbar" : "is-medium"
  let heroFooter = (
    <div className="hero-foot">
      <p className="is-pulled-right is-size-7">
        {`© `}
        {new Date().getFullYear()}
        {` Matthew Schaller. All rights reserved.`}
      </p>
    </div>
  )
  heroFooter = fullsize === "true" ? heroFooter : ""

  return (
    <section className={`hero is-primary ${heroClasses} ${heroStyles.hero}`}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 is-spaced">{heroTitle}</h1>
          <h2 className="subtitle is-4">{heroSubTitle}</h2>
        </div>
      </div>
      {heroFooter}
    </section>
  )
}

export default Hero
