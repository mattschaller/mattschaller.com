/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

function Footer() {

  return (
    <section class="">
      <footer class="footer">
        <div class="container">
          <div class="columns">
            <div class="column ">
              <p class="is-pulled-right is-size-6">
                {`© `}
                {new Date().getFullYear()} 
                {` Matthew Schaller.  All rights reserved.`}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
