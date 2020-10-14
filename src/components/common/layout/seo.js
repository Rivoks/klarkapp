import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ReactGA from "react-ga"


const SEO = ({ description, lang, meta, title }) => {

  useEffect(() => {
    ReactGA.initialize('UA-180544186-1', { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search); 
  });


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
          content: "https://www.klark.app/static/icon-40c0346b765f15c7dad47a174ea51f25.png",
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
          content: "https://www.klark.app/static/icon-40c0346b765f15c7dad47a174ea51f25.png",
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
