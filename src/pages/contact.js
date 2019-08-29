import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactform"

class Contact extends React.Component {
  render() {
    var referer = document.referrer;
    var title = (referer.indexOf('formspree.io/thanks') > -1) ? "Thank you": "Contact me";
    var subtitle = (referer.indexOf('formspree.io/thanks') > -1) ? "I will reply shortly": "Lets get in touch and talk about stuff.";
    return (
      <Layout
        location={this.props.location}
        title={title}
        subtitle={subtitle}
        fullsize="false"
      >
        <ContactForm />
      </Layout>
    )
  }
}

export default Contact
