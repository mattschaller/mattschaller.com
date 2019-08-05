import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title="404: Not Found"
        subtitle="Woops!  I must have made a mistake."
        fullsize="true"
      />
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
