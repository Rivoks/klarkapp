import React, { Component } from "react"

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

import image from "../images/logo-alt.png"

import { JsonLd } from "react-schemaorg"

class IndexPage extends Component {
  componentDidMount() {
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta")
      el.setAttribute("http-equiv", "Content-Security-Policy")
      el.setAttribute("content", "upgrade-insecure-requests")
      document.head.append(el)
    }
  }

  render() {
    return (
      <Layout>
        <JsonLd
          item={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Klark",
            alternateName: "Klark App",
          }}
        />

        <SEO title="Klark" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <Navigation />
        <Header />
        {/* <img src={image} alt="image" /> */}
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
