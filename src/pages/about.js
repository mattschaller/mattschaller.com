import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class About extends React.Component {
  render() {
    return (
      <Layout 
        location={this.props.location} 
        title="About me"
        subtitle="" 
        fullsize="false">
        <section className="section">
          <div className="container content">

            <h2>About me</h2>
            <p>I have 8+ years of experience as a software engineer, and team builder.  I have overseen product development, ran large distributed engineering teams, and have significant experience surrounding ecommerce and software-as-a-service.  I have worked on dozens of high-end retail and fashion brand ecommerce implementations, and successfully scaled an enterprise B2B ecommerce solution to over 100 million dollars per year in transactions.</p>
            <p>I am always looking to grow as an engineer and a leader, hear about interesting projects, and meeting likeminded people.  I am also actively hiring, so feel free to <Link to={`/contact`}>drop me a line</Link>.</p>
            <p><a href="//www.linkedin.com/in/mattschaller">Visit my LinkedIn page</a> to see career details.</p>

            <h3>Highlights</h3>
            <ul>
              <li>Currently Director of Development at <a href="//multiplica.com">multiplica.us</a>.  Responsible for all client development, as well as an international team of 12 to 15 earthlings.</li>
              <li>Previously Development Manager for ecommerce at <a href="//gemaire.com">Gemaire Distributors</a>, a Division of <a href="//watsco.com">Watsco Inc (NYSE:WSO)</a>.  Responsible for enterprise B2B ecommerce product built with Magento EE1.14.  Involved in two Magento Excellence awards.</li>
              <li>Previously Team Lead at <a href="//hiconversion.com">HiConversion</a>.  Responsible for 5 person frontend team working with high-end retail brands such as Pier 1, National Geographic, L’Oreal, Puma, and Finishline on the Demandware ecommerce platform (now SalesForce Commerce Cloud).</li>
            </ul>

            <h3>Technical stuff</h3>
            <div className="tags">
              <span className="tag">Javascript</span>
              <span className="tag">NodeJS</span>
              <span className="tag">ReactJS</span>
              <span className="tag">AngularJS</span>
              <span className="tag">gulp</span>
              <span className="tag">grunt</span>
              <span className="tag">webpack</span>
              <span className="tag">PHP</span>
              <span className="tag">Zend</span>
              <span className="tag">Laravel</span>
              <span className="tag">Python</span>
              <span className="tag">Django</span>
              <span className="tag">Flask</span>
              <span className="tag">MySQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Apache</span>
              <span className="tag">nginx</span>
              <span className="tag">git</span>
              <span className="tag">Jenkins</span>
              <span className="tag">AWS</span>
              <span className="tag">Google Cloud Platform</span>
              <span className="tag">Microsoft Azure</span>
              <span className="tag">Google Analytics</span>
              <span className="tag">New Relic</span>
              <span className="tag">Kibana</span>
              <span className="tag">Agile</span>
              <span className="tag">Atlassian</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container content">
            <h2>About this site</h2>
            <p>
              This site is built with <a href="//www.gatsbyjs.org/">GatsbyJS</a> using <a href="//github.com/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>.  This site uses <a href="//bulma.io">Bulma CSS</a>, <a href="//fontawesome.com">Font Awesome</a>, and <a href="//formspree.io">Formspree</a>. This site is hosted on <a href="//aws.amazon.com/s3/">Amazon S3</a>, and currently deployed using <a href="//travis-ci.com">Travis CI</a>. Source code can be found on <a href="//github.com/mattschaller/mattschaller.com">GitHub</a>.</p>
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
  }
`
