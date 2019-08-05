import React from "react"

function Contact() {
  

  return (
    <section className="section">
      <div className="container">
        <form method="POST" acceptCharset="utf-8" action="//formspree.io/mschaller3@gmail.com" className="">
          <input type="hidden" name="_next" value="//mattschaller.com" />
          <input type="hidden" name="_subject" value="mattschaller.com:  Contact Form Submission" />
          <input type="text" name="_gotcha" className="is-hidden" />

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control is-expanded has-icons-left">
                  <input className="input is-large" type="text" placeholder="Name" name="name" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control has-icons-left">
                  <input className="input is-large" type="email" placeholder="Email" name="_replyto"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control has-icons-left">
                  <input className="input is-large" type="tel" placeholder="Phone" name="number"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-mobile-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control has-icons-left">
                  <div className="select is-large">
                    <select name="purpose">
                      <option>General inquiries</option>
                      <option>Interested in hiring me</option>
                      <option>Interested in being hired by me</option>
                      <option>Other</option>
                    </select>
                    <span className="icon is-small is-left">
                      <i className="fas fa-bars"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <textarea className="textarea is-large" placeholder="Message" name="message" />
                </div>
              </div>
            </div>
          </div>
          
          <hr/>

          
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-info is-large" type="submit">
                    <span className="icon">
                      <i className="fas fa-paper-plane"></i>
                    </span>
                    <span>Submit</span>
                  </button>
                </div>
                <div className="control">
                  <button className="button is-white is-large" type="reset">
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
