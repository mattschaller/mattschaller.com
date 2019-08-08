import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Comment from "../components/blog/comment"
import Image from "gatsby-image"

class BlogPostTemplate extends React.Component {
  render() {
    console.log(this);
    const post = this.props.data.posts.getPost || {}
    const comments = this.props.data.posts.getPost.comments.items || []
    const { previous, next } = this.props.pageContext
    const portrait_thumbnail = "https://bulma.io/images/placeholders/128x128.png"
    return (
      <Layout
        location={this.props.location}
        title={post.title}
        subtitle={post.excerpt}
        description={post.body || post.excerpt}
        fullsize="false"
      >
        <article className="article">
          <section className="section content">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
              <hr />
            </div>
            <div className="container">
              <Bio />
              <nav
                className="pagination"
                role="navigation"
                aria-label="pagination"
              >
                {previous && (
                  <Link
                    className="pagination-previous"
                    to={previous.fields.slug}
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
                {next && (
                  <Link
                    className="pagination-next"
                    to={next.fields.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Link>
                )}
              </nav>
            </div>

            {comments.length ? (
              comments.map(
                (items) => {
                  return (
                    <Comment id={items.id} />
                  )
                }
              )
            ) : (
              <article class="media">
                No comments
              </article>
            )};

            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <Image fixed={this.props.data.portrait.childImageSharp.fixed} />
                </p>
              </figure>
              <div class="media-content">
                <div class="field">
                  <p class="control">
                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <a class="button is-info">Submit</a>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <label class="checkbox">
                        <input type="checkbox"/> Press enter to submit
                      </label>
                    </div>
                  </div>
                </nav>
              </div>
            </article>

          </section>
        </article>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query getPost($id: ID!) { 
  portrait: file(absolutePath: { regex: "/128x128.png/" }) {
    childImageSharp {
      fixed(width: 64, height: 64) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  posts {
    getPost(id: $id) {
      id
      author
      title
      body
      excerpt
      slug
      likes
      dislikes
      created
      modified
      blog {
        id
        title
        body
        created
        modified
        posts {
          nextToken
        }
        version
      }
      tags {
        items {
          id
          value
        }
        nextToken
      }
      comments {
        items {
          id
          author
          body
          likes
          dislikes
          created
          modified
          version
        }
        nextToken
      }
      version
    }
  }
}
`
