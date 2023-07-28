import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import "./mystyles.scss"

class Index extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title="Matt Schaller"
        subtitle="Welcome to my personal space."
        fullsize="false"
      >
        <section className="section">
          <div className="container content">
            <h2>About me</h2>
            <p>
              I have over 10 years of experience as a software engineer, and team
              builder. I have overseen product development, ran large
              distributed engineering teams, and have significant experience
              surrounding ecommerce and software-as-a-service. I have worked on
              dozens of ecommerce
              implementations for large retail brands, and successfully scaled an enterprise B2B
              ecommerce solution to over 100 million dollars per year in
              transactions.
            </p>
            <p>
              I am always looking to grow as an engineer and a leader, hear
              about interesting projects and opportunities, and meeting like-minded people. Feel free to
              {" "}
              <a href="mailto:matt@mattschaller.com">drop me a line</a>.
            </p>
            <p>
              <a href="//www.linkedin.com/in/mattschaller">
                Visit my LinkedIn page
              </a>{" "}
              to see career details.
            </p>

            <h3>Highlights</h3>
            <ul>
              <li>
                I am currently Lead Software Engineer at{" "}
                <a href="//thelearningexperience.com">The Learning Experience</a>, where I lead
                a team responsible for building awesome products for children &amp; their parents.
              </li>
              <li>
                Previously Director of Development at{" "}
                <a href="//multiplica.com">multiplica.us</a>. Responsible for
                all client development, as well as an international team of 10 earthlings.
              </li>
              <li>
                Previously Development Manager for ecommerce at{" "}
                <a href="//gemaire.com">Gemaire Distributors</a>, a Division of{" "}
                <a href="//watsco.com">Watsco Inc (NYSE:WSO)</a>. Responsible
                for enterprise B2B ecommerce product built with Magento EE1.14.
                Involved in two Magento Excellence awards.
              </li>
              <li>
                Previously Team Lead at{" "}
                <a href="//hiconversion.com">HiConversion</a>. Responsible for 5
                person frontend team working with high-end retail brands such as
                Pier 1, National Geographic, L’Oreal, Puma, and Finishline on
                the Demandware ecommerce platform (now SalesForce Commerce
                Cloud).
              </li>
            </ul>

            <h3>Technical stuff</h3>
            <div className="tags">
              <span className="tag">Typescript</span>
              <span className="tag">Javascript</span>
              <span className="tag">Node.js</span>
              <span className="tag">React</span>
              <span className="tag">React Native</span>
              <span className="tag">react-native-web</span>
              <span className="tag">PHP</span>
              <span className="tag">Python</span>
              <span className="tag">Matplotlib</span>
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
              <span className="tag">Agile</span>
              <span className="tag">Atlassian</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container content">
            <h2>About this site</h2>
            <p>
              This site is built with <a href="//www.gatsbyjs.org/">GatsbyJS</a>{" "}
              using{" "}
              <a href="//github.com/gatsbyjs/gatsby-starter-blog">
                gatsby-starter-blog
              </a>
              . This site uses <a href="//bulma.io">Bulma CSS</a>, and{" "}
              <a href="//fontawesome.com">Font Awesome</a>. This site is hosted on{" "}
              <a href="//aws.amazon.com/s3/">Amazon S3</a>, and currently
              deployed using <a href="//https://github.com/features/actions">Github Actions</a>. Source
              code can be found on{" "}
              <a href="//github.com/mattschaller/mattschaller.com">GitHub</a>.
            </p>
            <img
              src="https://github.com/mattschaller/mattschaller.com/actions/workflows/deploy_gatsby_to_s3.yml/badge.svg"
              alt="github actions"
            />
          </div>
        </section>
      </Layout>
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
