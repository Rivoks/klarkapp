import React, { Component } from "react"
import ReactGA from "react-ga"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Entreprise from "../components/sections/entreprise"
import Faq from "../components/sections/faq"
import Splash from "../components/sections/splash"


import { JsonLd } from "react-schemaorg";



class IndexPage extends Component {
  componentDidMount() {
    ReactGA.initialize('G-HMDQ0W9P6M', { debug: true });
    ReactGA.pageview(window.location.pathname + window.location.search);


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
  }
  render() {
    return (
      <Layout>
        <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "Website",
            name: "Klark",
            alternateName: "Klark App",
            alumniOf: {
              "@type": "Website",
              name: ["Klark Website"],
            },
            knowsAbout: ["Klark Website"],
          }}
        />
        <SEO title="Klark" />
        <Navigation />
        <Header />
        <Features />
        <GetStarted />
        <Entreprise />
        <Splash />
        <Faq />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
