import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './hero-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeroMobile = () => {
  const heroMobile = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "hero-mobile.jpg"}) {
      childImageSharp {
        fluid(webpQuality: 100, maxWidth: 600) {
          aspectRatio
          sizes
          src
          srcSet
          originalImg
          tracedSVG
          srcWebp
          presentationHeight
          presentationWidth
        }
      }
    }
  }
`)

  return (
    <div className="heroImage">
      <Img  
        fluid={heroMobile.file.childImageSharp.fluid}
        alt="girl with jewlery"  
        fadeIn={true}
        durationFadeIn={3500}
        className="heroImage--small"
      />
    </div>
  )
  
  
}

export default HeroMobile

