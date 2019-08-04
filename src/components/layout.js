import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"

class Layout extends React.Component {

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    console.log(this)

    if(location.pathname === rootPath ) {

      return (
        <section class="">
            <Header title={title} full='true'/>
            <Hero title={title} subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.' full='true' />
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
