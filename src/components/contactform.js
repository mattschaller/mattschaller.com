import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="section">
      <div className="container">
        <form
          method="POST"
          acceptCharset="utf-8"
          onSubmit={this.submitForm}
          action="//formspree.io/xoqllvbe"
          className=""
        >
          <input type="hidden" name="_next" value="//mattschaller.com" />
          <input
            type="hidden"
            name="_subject"
            value="mattschaller.com:  Contact Form Submission"
          />
          <input type="text" name="_gotcha" className="is-hidden" />

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control">
                    {status === "SUCCESS" && <div class="notification is-success is-light"><button class="delete"></button>Your email has been sent!</div>}
                    {status === "ERROR" && <div class="notification is-danger is-light"><button class="delete"></button>An error has occured.  This error has been captured for review.  Please try again later.</div>}
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control is-expanded has-icons-left">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
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
                  <input
                    className="input is-large"
                    type="email"
                    placeholder="Email"
                    name="_replyto"
                  />
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
                  <input
                    className="input is-large"
                    type="tel"
                    placeholder="Phone"
                    name="number"
                  />
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
                  <textarea
                    className="textarea is-large"
                    placeholder="Message"
                    name="message"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />

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
                  <button className="button is-white is-large" type="reset" onClick={this.resetForm}>
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
    );
  }

  resetForm(ev) {
    this.setState({ status: "" });
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}