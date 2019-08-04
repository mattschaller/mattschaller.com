import React from "react"
import ReCAPTCHA from "react-google-recaptcha";

function Contact({ title, subtitle }) {

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  

  return (
    <section class="section">
      <div class="container">
        <form method="POST" action="//formspree.io/mschaller3@gmail.com" class="">

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control is-expanded has-icons-left">
                  <input class="input is-large" type="text" placeholder="Name" name="name" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input class="input is-large" type="email" placeholder="Email" name="email"/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input class="input is-large" type="tel" placeholder="Phone" name="number"/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-mobile-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <div class="select is-large">
                    <select name="purpose">
                      <option>General inquiries</option>
                      <option>Interested in hiring me</option>
                      <option>Interested in being hired by me</option>
                      <option>Other</option>
                    </select>
                    <span class="icon is-small is-left">
                      <i class="fas fa-bars"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea is-large" placeholder="Message" name="message" />
                </div>
              </div>
            </div>
          </div>
          
          <hr/>

          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <ReCAPTCHA
                    sitekey="6LdMKrEUAAAAANMKkHdJBvHP5J2wjVfOtjtEjl9A"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-info is-large" type="submit">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-text is-large" type="reset">Cancel</button>
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
