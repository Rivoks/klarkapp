import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation2 from "../components/common/navigation/navigation2"
import styled from "styled-components"
import { Container } from "./../components/global"

import Footer from "../components/sections/footer"

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO title="Mentions Légales" />
      <Navigation2 />

      <Container>
        <Title>Mention légales</Title>
        <p style={{ marginBottom: "10%" }}>
          Klark SAS, société par actions simplifiée au capital de 1000,00 €,
          immatriculée au RCS de Paris sous le numéro 885 401 265 et dont le
          siège social se situe 31 Av de Segur 75007 Paris. <br />
          <br />
          Klark est enregistrée en tant qu’agent bancaire auprès du Financial
          Conduct Authority (FCA) sous le numéro d’agrément : XXXXXX qui
          autorise en tant que tel à émettre, gérer et mettre à disposition de
          la monnaie électronique ainsi qu’à fournir des services de paiement.
          <br />
          <br />
          Email : contact@klark.app
          <br />
          <br /> Responsable du site M.Jeremy CALVO
          <br />
          <br /> Hébergeur Netlify 610 22nd Street, Suite 315, San Francisco, CA
          94107 Site web : https://www.netlify.com
        </p>
      </Container>
      <Footer />
    </Layout>
  )
}

export default PrivacyPage

const Title = styled.h2`
  background-color: white;
  padding: 15% 0 20px 0;
  position: relative;
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`
