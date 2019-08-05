/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"

function Header({title, fullsize}) {

  let headerClasses = (fullsize === 'true') ? 'is-primary' : '';

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
        <div className="navbar-brand">
          <Link className="navbar-item is-shadowless" to={`/`}>
            {`matt schaller`}
          </Link>
          <span role="button" className="navbar-burger nav-toggle is-shadowless" aria-label="menu" aria-expanded="false" onClick={onClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-start">
          <Link className="navbar-item is-shadowless" to={`/about`}>
            about
          </Link>
            <Link className="navbar-item is-shadowless" to={`/contact`}>
              contact
            </Link>
          </div>
          
          <div className="navbar-end">
            <span className="navbar-item">
              <Link className="button is-primary is-inverted" to={`/`}>
                <span className="icon">
                  <i className="fas fa-sign-in-alt"></i>
                </span>
              </Link>
            </span>
          </div>
        </div>
      </nav>
  )
}

export default Header
