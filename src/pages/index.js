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

class Index extends React.Component {
  render() {
    console.log(this);
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
    posts {
      listBlogs {
        items {
          id
          name
          revision
          posts {
            items {
              id
            }
          }
        }
        nextToken
      }
      listPosts {
        items {
          id
          author
          title
          body
          likes
          dislikes
          revision
          blog {
            id
          }
          comments {
            items {
              id
            }
          }
        }
        nextToken
      }
      listComments {
        items {
          id
          author
          body
          likes
          dislikes
          revision
          post {
            id
          }
        }
        nextToken
      }
    }
  }
`