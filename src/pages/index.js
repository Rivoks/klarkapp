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
import Steps from "../components/sections/steps"
import Zendesk from "react-zendesk"
import "../styles/GlobalStyles"

import image from "../images/logo-alt.png"

import { JsonLd } from "react-schemaorg"
import FadeIn from "react-fade-in"

class IndexPage extends Component {
  state = {
    showZendesk: false,
  }

  componentDidMount() {
    this.setState({ showZendesk: true })
  }

  render() {
    const { showZendesk } = this.state

    const setting = {
      color: {
        theme: "#0055FF",
      },
      launcher: {
        chatLabel: {
          "en-US": "Need Help",
        },
      },
      contactForm: {
        fields: [
          { id: "description", prefill: { "*": "My pre-filled description" } },
        ],
      },
    }

    return (
      <Layout>
        {showZendesk ? (
          <Zendesk
            zendeskKey={"7af8bdac-02dc-433b-90b0-6866f6dc6901"}
            {...setting}
          />
        ) : (
          <></>
        )}
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
        <FadeIn transitionDuration="1000">
          <Header />
        </FadeIn>
        {/* <img src={image} alt="image" /> */}
        <Features />
        <GetStarted />
        <Entreprise />
        <Splash />
        {/* <Steps /> */}
        <Faq />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
