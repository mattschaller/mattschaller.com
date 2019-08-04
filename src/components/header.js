/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

function Header({title}) {

  return (
      <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
          <Link className="navbar-item" to={`/`}>
            {title}
          </Link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-start">
            <Link className="navbar-item" to={`/blog`}>
              blog
            </Link>
            <Link className="navbar-item " to={`/contact`}>
              contact
            </Link>
          </div>
          
          <div class="navbar-end">
            <span class="navbar-item">
              <a href="//www.github.com/mattschaller" class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
  )
}

export default Header
