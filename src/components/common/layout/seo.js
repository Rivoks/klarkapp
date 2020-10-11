import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import image from "../../../images/icon.png"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s • ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: "../../../images/icon.png",
        },
        {
          property: `og:url`,
          content: `https://www.klark.app`,
        },
        {
          property: `og:title`,
          content: `Klark • ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `https://www.klark.app`,
        },
        {
          name: `twitter:image`,
          content: "../../../images/icon.png",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `%s • ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
        
      />
      </>
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
