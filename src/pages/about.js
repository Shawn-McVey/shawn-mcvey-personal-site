import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import shawnPhoto from '../images/shawn.jpeg'
import { graphql } from 'gatsby'

export default ({data}) => (
  <>
  <Hero />
  <Layout>
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`, textAlign: `center` }}>
    <h2>Hi! I'm Shawn</h2>
    <p>I do lots of different things on this here internet.</p>
    <img style={{ width: 250 }} src={shawnPhoto} alt=""/>
    <div dangerouslySetInnerHTML={{__html: data.allContentfulShawnAboutMeAboutShawnTextNode.edges[0].node.childMarkdownRemark.html}} className="long-form-biography" 
    style={{textAlign: `left` }}>
    </div>
    </ div>
  </Layout>
  <div>
  </div>
  </>
)

export const query = graphql`
  query {
    allContentfulShawnAboutMeAboutShawnTextNode {
      edges {
        node {
          id
          aboutShawn
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
