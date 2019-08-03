import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"

class Layout extends React.Component {

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if(location.pathname === rootPath ) {

      return (
        <section class="hero is-primary is-fullheight">
          <div class="hero-head">
            <Header title={title} />
          </div>
          <div class="hero-body">
            <Hero title={title} subtitle='Personal homebase for matthew schaller.' />
          </div>
          <div class="hero-foot">
            
          <Footer />
          </div>
        </section>
      )

    }else{

      return (
        <div>
            <Header title={title} />
          
              {children}

            <Footer />
        </div>
      )
      
    }
  }
}

export default Layout
