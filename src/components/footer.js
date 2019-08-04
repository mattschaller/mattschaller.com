/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

function Footer() {

  return (
    <section>
      <footer class="footer">
        <div class="columns">
          <div class="column">
          </div>
          <div class="column">
          </div>
          <div class="column">
          </div>
          <div class="column">
            {`© `}
            {new Date().getFullYear()} 
            {` Matthew Schaller`}
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
