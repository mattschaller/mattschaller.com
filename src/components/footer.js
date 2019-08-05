/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

function Footer() {

  return (
    <section className="">
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column ">
              <p className="is-pulled-right is-size-6">
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
