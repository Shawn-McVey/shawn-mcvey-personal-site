import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import logoImg from '../images/sm-logo.svg'


const ImageBackground = styled('div')`
    background-image: url('/images/background-image.jpg');
    background-position: top 20% center;
    background-size: cover;
`

const ContentContainer = styled('div')`
    /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
    display: flex; 
    flex-direction: column;
    height: 100%;
    justify-content: flex-center;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
        margin-top: 0;
    }

    a {
        margin-top: 0.5rem;
    }
`

export default () => {
    const data = useStaticQuery(graphql`
      query {
        background: file(relativePath: { eq: "background-image.jpg" }) {
            childImageSharp {
                fixed(width: 500, height: 600) {
                ...GatsbyImageSharpFixed
                }
            }
        }
      }
    `)
  
    return (
          <ImageBackground>
            <ContentContainer>
                <img style={{ width: `100%` }} src={logoImg} />
            </ContentContainer>
          </ImageBackground>
    )
  }
