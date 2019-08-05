import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import SEO from "../components/seo"

class Layout extends React.Component {

  render() {
    const { location, title, children, fullsize, subtitle } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if(location.pathname === rootPath ) {

      return (
        <section className="">
            <SEO title={title} />
            <Header title={title} fullsize={fullsize} />
            <Hero title={title} subtitle={this.props.subtitle} fullsize={fullsize} />
            {children}
        </section>
      )

    }else{

      return (
        <section className="">
          <SEO title={title} />
          <Header title={title} fullsize={fullsize} />
          <Hero title={title} subtitle={subtitle} fullsize={fullsize} />

          {children}
          <Footer />
        </section>
      )
      
    }
  }
}

export default Layout
