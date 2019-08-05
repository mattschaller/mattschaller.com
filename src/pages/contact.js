import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactform"

class Contact extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title="Contact me"
        subtitle="Lets get in touch and talk about stuff."
        fullsize="false"
      >
        <ContactForm />
      </Layout>
    )
  }
}

export default Contact
