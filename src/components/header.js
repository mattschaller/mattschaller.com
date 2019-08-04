/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

function Header({title, full}) {

  let headerClasses = (full === 'true') ? 'is-primary' : '';

  let onClick = function(){
    let toggle = document.querySelector(".nav-toggle"); 
    let menu = document.querySelector(".navbar-menu");
    if (toggle && menu) {
      toggle.classList.toggle("is-active"); 
      menu.classList.toggle("is-active");   
    }
  }


  return (
      <nav role="navigation" aria-label="main navigation" className={`navbar is-transparent ${headerClasses}`}>

        <div class="navbar-brand">
          <Link className="navbar-item is-shadowless" to={`/`}>
            {title}
          </Link>
          <a role="button" class="navbar-burger nav-toggle is-shadowless" aria-label="menu" aria-expanded="false" onClick={onClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-start">
            <Link className="navbar-item is-shadowless" to={`/about`}>
              about
            </Link>
            <Link className="navbar-item is-shadowless" to={`/contact`}>
              contact
            </Link>
          </div>
          
          <div class="navbar-end">
            <span class="navbar-item">
              <Link className="button is-primary is-inverted" to={`/`}>
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>Login</span>
              </Link>
            </span>
          </div>
        </div>
      </nav>
  )
}

export default Header
