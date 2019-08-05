import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import "./mystyles.scss"

class Index extends React.Component {
  render() {

    return (
      <Layout 
        location={this.props.location} 
        title="Home"
        subtitle="Welcome to indextown" 
        fullsize="true" />
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
