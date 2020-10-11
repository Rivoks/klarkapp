import React from "react"
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga'


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
 
const advancedMatching = { em: 'elias@klark.app' }
const options = {
  autoConfig: true, 
  debug: false,
};
ReactPixel.init('326698568627198', advancedMatching, options);
 
ReactPixel.pageView(); 

ReactGA.initialize('G-HMDQ0W9P6M');
ReactGA.pageview(window.location.pathname + window.location.search);

const IndexPage = () => {

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
