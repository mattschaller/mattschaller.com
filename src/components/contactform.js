import React from "react"

function Contact({ title, subtitle }) {

  const heroTitle = title || ''
  const heroSubTitle = subtitle || ''

  return (
    <section class="section">
      <div class="container">
        <form class="">

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control is-expanded has-icons-left">
                  <input class="input is-large" type="text" placeholder="Text input"/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control has-icons-left">
                  <input class="input is-large" type="email" placeholder="Text input"/>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Phone number</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="tel" placeholder="Text input"/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Subject</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <div class="select is-large">
                    <select>
                      <option>General inquiries</option>
                      <option>Interested in hiring me</option>
                      <option>Interested in being hired by me</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Message</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea class="textarea is-large" placeholder="Textarea"></textarea>
                </div>
              </div>
            </div>
          </div>


          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">I agree to the <a href="#">terms and conditions</a></label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"></label>
            </div>
            <div class="field-body">
              <div class="field is-grouped is-grouped-right">
                <div class="control">
                  <button class="button is-info is-large">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-text is-large">Cancel</button>
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
