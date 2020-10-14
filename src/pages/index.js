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
