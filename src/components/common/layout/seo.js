import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ReactGA from "react-ga"
import Zendesk from "react-zendesk";


const SEO = ({ description, lang, meta, title }) => {


  const setting = {
    color: {
      theme: "#000"
    },
    launcher: {
      chatLabel: {
        "en-US": "Need Help"
      }
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "My pre-filled description" } }
      ]
    }
  };


  useEffect(() => {
    ReactGA.initialize('UA-180544186-1', { debug: true, titleCase: false, });
    ReactGA.ga('set', 'checkProtocolTask', null);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.href);

    // const script = document.createElement("script");
    // script.src = "https://static.zdassets.com/ekr/snippet.js?key=7af8bdac-02dc-433b-90b0-6866f6dc6901";
    // script.async = true;
    // console.log(script.src);

    // document.body.appendChild(script);


    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '326698568627198');
    fbq('track', 'PageView');
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
    <Zendesk zendeskKey={"7af8bdac-02dc-433b-90b0-6866f6dc6901"} {...setting} onLoaded={() => console.log('is loaded')} />
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
