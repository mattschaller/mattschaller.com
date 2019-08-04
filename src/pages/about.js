import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About me" />
        <Hero title="About me" subtitle="A whole section dedicated to me" full="false" />
        <section class="section">
          <div class="container content">

            <h2>About me</h2>
            <p>I have 8+ years of experience as a software engineer, and team builder.  I've overseen product development, ran large distributed engineering teams, and have significant experience surrounding ecommerce and software-as-a-service.  I've worked on dozens of high-end retail and fashion brand ecommerce implementations, and successfully scaled an enterprise B2B ecommerce solution to over 100 million dollars per year in transactions.</p>
            <p>I'm always looking to grow as an engineer and a leader, hear about interesting projects, and meeting likeminded people.  I'm also actively hiring, so feel free to <Link to={`/contact`}>drop me a line</Link>.</p>
            <p><a href="//www.linkedin.com/in/mattschaller">Visit my LinkedIn page</a> to see career details.</p>

            <h3>Highlights</h3>
            <ul>
              <li>Currently Director of Development at <a href="//multiplica.com">multiplica.us</a>.  Responsible for all client development, as well as an international team of 12 to 15 earthlings.</li>
              <li>Previously Development Manager for ecommerce at <a href="//gemaire.com">Gemaire Distributors</a>, a Division of <a href="//watsco.com">Watsco Inc (NYSE:WSO)</a>.  Responsible for enterprise B2B ecommerce product built with Magento EE1.14.  Involved in two Magento Excellence awards.</li>
              <li>Previously Team Lead at <a href="//hiconversion.com">HiConversion</a>.  Responsible for 5 person frontend team working with high-end retail brands such as Pier 1, National Geographic, L’Oreal, Puma, and Finishline on the Demandware ecommerce platform (now SalesForce Commerce Cloud).</li>
            </ul>

            <h3>Technical stuff</h3>
            <div class="tags">
              <span class="tag">Javascript</span>
              <span class="tag">NodeJS</span>
              <span class="tag">ReactJS</span>
              <span class="tag">AngularJS</span>
              <span class="tag">gulp</span>
              <span class="tag">grunt</span>
              <span class="tag">webpack</span>
              <span class="tag">PHP</span>
              <span class="tag">Zend</span>
              <span class="tag">Laravel</span>
              <span class="tag">Python</span>
              <span class="tag">Django</span>
              <span class="tag">Flask</span>
              <span class="tag">MySQL</span>
              <span class="tag">MongoDB</span>
              <span class="tag">Apache</span>
              <span class="tag">nginx</span>
              <span class="tag">git</span>
              <span class="tag">Jenkins</span>
              <span class="tag">AWS</span>
              <span class="tag">Google Cloud Platform</span>
              <span class="tag">Microsoft Azure</span>
              <span class="tag">Google Analytics</span>
              <span class="tag">New Relic</span>
              <span class="tag">Kibana</span>
              <span class="tag">Agile</span>
              <span class="tag">Atlassian</span>
            </div>

          </div>

        </section>

        <section class="section">
          <div class="container content">
            <h2>About this site</h2>
            <p>
              This site is built with <a href="//www.gatsbyjs.org/">GatsbyJS</a> using <a href="//github.com/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>.  This site uses <a href="//bulma.io">Bulma CSS</a>, <a href="//fontawesome.com">Font Awesome</a>, and <a href="//formspree.io">Formspree</a>. This site is hosted on <a href="//aws.amazon.com/s3/">Amazon S3</a>, and currently deployed using <a href="//travis-ci.com">Travis CI</a>. Source code can be found on <a href="//github.com/mattschaller/mattschaller.com">GitHub.</a>.</p>
              <img src="https://travis-ci.org/mattschaller/mattschaller.com.svg?branch=master" alt="travis"/>
          </div>
        </section>

      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
