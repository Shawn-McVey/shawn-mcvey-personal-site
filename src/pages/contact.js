import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import "../css/contactForm.css"

export default () => (
  <>
  <Hero />
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem`, textAlign: `center` }}>
      <h2>Contact Me</h2>
      <p>Think we might be able to work together? Drop me a line with this handy form!</p>
      <form className="contact-form" name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
        <input type='hidden' name='form-name' value='Contact Form' />
        <input className="" type="text" name="name" placeholder="Full Name" required />
        <input className="" type='email' name='email' placeholder="Email" required />
        <input className="last-input" type="text" name="subject" placeholder="Subject" required />
        <br />
        <textarea className="" name='message' placeholder="Type your message..." required />
        <br />
        <button type='submit'>Send</button>
      </form>
    </div>
  </Layout>
  </>
)