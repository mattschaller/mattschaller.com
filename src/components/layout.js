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
        <section class="">
            <Header title={title} />
            <Hero title={title} subtitle='Personal homebase for matthew schaller.' />
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
