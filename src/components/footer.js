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
        © {new Date().getFullYear()} Matthew Schaller. Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` & `}
        <a href="https://www.bulma.io">Bulma</a>
        {` on top of `}
        <a href="https://www.aws.com">AWS</a>.
      </footer>
    </section>
  )
}

export default Footer
