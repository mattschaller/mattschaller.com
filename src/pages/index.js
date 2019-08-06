import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost"
import { gql } from "apollo-boost"



import "./mystyles.scss"


const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  request: operation => {
    operation.setContext({
      headers: {
        'x-api-key': `${process.env.GRAPHQL_API_KEY}`,
      },
    });
  },
});

client
  .mutate({
    mutation: gql`
    {
      createBlog(input: "Blog number 1") {
        id
        name
      }
    }
  `
})
.then(result => console.log(result));

client
  .query({
    query: gql`
      {
        listBlogs(){
          id
          name
        }
      }
    `
  })
  .then(result => console.log(result));


class Index extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Layout
          location={this.props.location}
          title="Home"
          subtitle="Welcome to indextown"
          fullsize="true"
        />
      </ApolloProvider>
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
