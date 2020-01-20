import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ReCAPTCHA from "react-google-recaptcha"
import "../css/contactForm.css"

export default () => (
  <>
  <Hero />
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem`, textAlign: `center` }}>
      <h2>Hi! I'm Shawn</h2>
      <p>I do lots of different things on this here internet.</p>
      <form className="contact-form" name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
        <input type='hidden' name='form-name' value='Contact Form' />
        <input className="" type="text" name="name" />
        <input className="" type='email' name='email' />
        <input className="" type="text" name="subject" />
        <br />
        <textarea className="" name='message' />
        <br />
        <button type='submit'>Send</button>
      </form>
    </div>
  </Layout>
  </>
)