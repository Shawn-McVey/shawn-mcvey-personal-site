import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import QuickBio from "../components/quickBio"
import Img from 'gatsby-image';
import { graphql } from 'gatsby'

export default ({data}) => (
  <>
  <Hero />
  <Layout>
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`, textAlign: `center` }}>
    <h2>Hi! I'm Shawn</h2>
    <p>I do lots of different things on this here internet.</p>
    </ div>
  </Layout>
  <div>
    <QuickBio />
  </div>

  </>
)

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "background-image.jpg" }) {
//       childImageSharp {
//         fixed(width: 500, height: 600) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `