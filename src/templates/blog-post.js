import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article class="article">
          <Hero title={post.frontmatter.title} subtitle={post.frontmatter.date} />
          <section class="section content">
            <div class="container">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr/>
            </div>
          </section>
          <section class="section">
            <div class="container">
              <Bio />
              <nav class="pagination" role="navigation" aria-label="pagination">
                {previous && (
                    <Link className="pagination-previous" to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                  {next && (
                    <Link className="pagination-next" to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
              </nav>
            </div>
          </section>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
