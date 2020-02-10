import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import "../css/main.css"
import { graphql } from 'gatsby'

export default ({data}) => (
  <>
  <Hero />
  <Layout>
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`, textAlign: `center` }}>
    <h2>{data.site.siteMetadata.title}</h2>
    <p>{data.site.siteMetadata.subheader}</p>
    </ div>
  </Layout>
  <div>
<div className="grid">
    {/* {console.log(data.allContentfulShawnQuickBios.edges[0].node)} */}
    { data.allContentfulShawnQuickBios.edges.map(({node: post}) => {
      return(
        <div className="col">
          <h3>{post.header}</h3>
          <p>{post.content}</p>
        </div>
      )
    })}
  </div>
</div>
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subheader
      }
    }
    allContentfulShawnQuickBios(limit: 3) {
      edges {
        node {
          id
          header
          content
        }
      }
    }
  }
`