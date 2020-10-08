import React from "react"

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

const IndexPage = () => {
  {
    /* <script type="text/javascript">
        document.getElementsByTagName("title")[0].innerHTML = "La banque en
        ligne pour les pros"
      </script> */
  }
  return (
    <Layout>
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

export default IndexPage
