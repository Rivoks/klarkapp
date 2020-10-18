import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ReactGA from "react-ga"
import Zendesk from "react-zendesk"

const SEO = ({ description, lang, meta, title }) => {
  useEffect(() => {
    // HOTJAR

    ;(function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          ;(h.hj.q = h.hj.q || []).push(arguments)
        }
      h._hjSettings = { hjid: 2045294, hjsv: 6 }
      a = o.getElementsByTagName("head")[0]
      r = o.createElement("script")
      r.async = 1
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")

    // GOOGLE ANALYTICS

    ReactGA.initialize("UA-180544186-1", { debug: false, titleCase: false })
    ReactGA.ga("set", "checkProtocolTask", null)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.href)
    ReactGA.event({
      category: "User",
      action: "Created an Account",
    })

    // FACEBOOK

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    )
    fbq("init", "326698568627198")
    fbq("track", "PageView")
  })

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
        titleTemplate={`%s - ${site.siteMetadata.title}`}
        link={[
          {
            rel: `prefetch`,
            href: `../../../static/SFProDisplay-Regular.woff/`,
            as: `font`,
            type: `font/woff`,
          },
          {
            rel: `prefetch`,
            href: `../../../static/SFProDisplay-Bold.woff/`,
            as: `font`,
            type: `font/woff`,
          },
          {
            rel: `prefetch`,
            href: `../../../static/SFProDisplay-Medium.woff/`,
            as: `font`,
            type: `font/woff`,
          },
        ]}
        meta={[
          {
            httpEquiv: `Content-Security-Policy`,
            content: "upgrade-insecure-requests",
          },
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content:
              "https://www.klark.app/static/logo-alt-5b76186870b36c9562fd79d06f796531.png",
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
            content:
              "https://www.klark.app/static/logo-alt-5b76186870b36c9562fd79d06f796531.png",
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
