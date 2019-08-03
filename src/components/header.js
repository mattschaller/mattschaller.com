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
    <section>
      <nav class="navbar is-dark">
        <div class="container">
          <div class="navbar-brand">
            <Link to={`/`}>
              {title}
            </Link>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
            <Link className="navbar-item is-active" to={`/`}>
              home
            </Link>
            <Link className="navbar-item" to={`/blog`}>
              blog
            </Link>
              <span class="navbar-item">
                <a href="google.com" class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
