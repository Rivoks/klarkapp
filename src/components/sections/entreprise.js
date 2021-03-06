import React from "react"
import styled from "styled-components"
import { Row, Col, Divider } from "antd"
import { Container } from "../global"
import "../../../src/styles/GlobalStyles"
import Chicken from "../../images/chicken-emoji.webp"
import Eagle from "../../images/eagle-emoji.webp"
import Dove from "../../images/dove-emoji.webp"
import Unicorn from "../../images/unicorn-emoji.webp"
import { CreditCardOutlined, FileProtectOutlined } from "@ant-design/icons"
import AnchorLink from "react-anchor-link-smooth-scroll"

const { useState } = React

const mailTo = () => {
  window.location.href = `mailto:hello@klark.app?subject=Demande%20Klark%20Corporate`
}

const Entreprise = () => {
  const [companyExist, setCompanyExist] = useState(true)

  return (
    <>
      <EntrepriseWrapper id="tarifs">
        <Container>
          <center>
            <EntrepriseTextGroup>
              <Subtitle>Pas de frais cachés</Subtitle>
              <h3 style={{ marginBottom: "60px" }}>
                Arrêtez les frais bancaires exagérés
                {/* <br /> */}
              </h3>
            </EntrepriseTextGroup>
            {/* 
            <Row
              style={{ marginTop: "5%", marginBottom: "5%" }}
              justify="center"
            >
              <Col span={{ md: 8, lg: 8 }}>
                <div
                  style={{
                    backgroundColor: "#f5f6fa",
                    padding: "7px 0px",
                    borderRadius: "50px",
                    width: "360px",
                  }}
                >
                  <center>
                    <button
                      style={{
                        padding: "10px 10px",
                        zIndex: "99",
                        position: "relative",
                        marginRight: "5%",
                        height: "40px",
                        width: "160px",
                        color: `${companyExist ? "white" : "black"}`,
                        transition: "0.2s ease-in-out",
                      }}
                      onClick={() => setCompanyExist(true)}
                    >
                      Entreprise existante
                    </button>
                    <button
                      style={{
                        padding: "10px 10px",
                        zIndex: "99",
                        position: "relative",
                        height: "40px",
                        width: "160px",
                        color: `${companyExist ? "black" : "white"}`,
                        transition: "0.2s ease-in-out",
                      }}
                      onClick={() => setCompanyExist(false)}
                    >
                      Entreprise en création
                    </button>
                    <div
                      className="translatedSlide"
                      style={{
                        backgroundColor: "#0055FF",
                        borderRadius: "50px",

                        width: "160px",
                        height: "40px",
                        position: "absolute",
                        left: "13px",
                        top: "7px",
                        zIndex: "1",
                        transition: "0.2s ease-in-out",
                        transform: `translate3d(${
                          companyExist ? "0%" : "110%"
                        }, 0px, 0px)`,
                      }}
                    ></div>
                  </center>
                </div>
              </Col>
            </Row>
          */}
          </center>

          <Row
            gutter={16}
            style={{
              marginTop: "5%",
              opacity: `${companyExist ? "1" : "1"}`,
              transitionProperty: "opacity",
              transitionDuration: "0.4s",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className="gutter-row"
              style={{
                display: `${companyExist ? "block" : "none"}`,
              }}
            >
              <div className="custom-card">
                <center>
                  <img
                    src={Chicken}
                    alt="Solo"
                    className="emojiPricing"
                    height="50px"
                  />
                  <FeatureTitle>Solo</FeatureTitle>
                  <h3 style={{ fontWeight: "extrabold" }}>
                    9,99€
                    <span className="per-month"> / mois HT</span>
                  </h3>
                  {/* <h5 style={{ color: "#95a5a6" }}>(Au lieu de 119,88€/an)</h5> */}
                  <p
                    style={{
                      color: "#69CC00",
                      fontSize: "14px",
                      lineHeight: "23px",
                    }}
                  >
                    Économisez 119,88€ / an en vous inscrivant dès maintenant.
                  </p>
                  <Divider orientation="center"></Divider>
                </center>
                <FeatureRow>20 virements et prélèvements SEPA</FeatureRow>
                <FeatureRow>1 carte physique </FeatureRow>
                <FeatureRow>1 carte virtuelle </FeatureRow>
                <FeatureRow>1 compte utilisateur</FeatureRow>
                <FeatureRow>IBAN Français </FeatureRow>
                <FeatureRow>Limites de retrait 1000,00 € </FeatureRow>
                <FeatureRow>0.1% cashback par carte</FeatureRow>
                <FeatureRow>Assistance 7j/7 </FeatureRow>

                <AnchorLink href="#top">
                  <EntrepriseButton>Pré-inscription</EntrepriseButton>
                </AnchorLink>

                <FormSubtitle>30 jours gratuits - Sans engagement</FormSubtitle>
              </div>
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className="gutter-row"
              style={{
                display: `${companyExist ? "block" : "none"}`,
              }}
            >
              <div className="custom-card">
                <center>
                  <img
                    src={Dove}
                    alt="Standard"
                    className="emojiPricing"
                    height="50px"
                  />
                  <FeatureTitle>Standard</FeatureTitle>
                  <h3 style={{ fontWeight: "extrabold" }}>
                    19,99€
                    <span className="per-month"> / mois HT</span>
                  </h3>
                  {/* <h5 style={{ color: "#95a5a6" }}>(Au lieu de 239,88€/an)</h5> */}
                  <p
                    style={{
                      color: "#69CC00",
                      fontSize: "14px",
                      lineHeight: "23px",
                    }}
                  >
                    Économisez 239,88€ / an en vous inscrivant dès maintenant.
                  </p>
                  <Divider orientation="center"></Divider>
                </center>
                <FeatureRow>100 virements et prélèvements SEPA</FeatureRow>
                <FeatureRow>2 cartes physiques </FeatureRow>
                <FeatureRow>2 cartes virtuelles</FeatureRow>
                <FeatureRow>5 comptes utilisateur</FeatureRow>
                <FeatureRow>IBAN Français </FeatureRow>
                <FeatureRow>Limites de retrait 1500,00 € </FeatureRow>
                <FeatureRow>0.2% cashback par carte</FeatureRow>
                <FeatureRow>Assistance 7j/7 </FeatureRow>
                <FeatureRow>Accès pour votre comptable </FeatureRow>
                <FeatureRow>Rôles et permissions</FeatureRow>

                <AnchorLink href="#top">
                  <EntrepriseButton>Pré-inscription</EntrepriseButton>
                </AnchorLink>

                <FormSubtitle>30 jours gratuits - Sans engagement</FormSubtitle>
              </div>
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className="gutter-row"
              style={{
                display: `${companyExist ? "block" : "none"}`,
              }}
            >
              <div className="custom-card">
                <center>
                  <img
                    src={Eagle}
                    alt="Premium"
                    className="emojiPricing"
                    height="50px"
                  />
                  <FeatureTitle>Premium</FeatureTitle>
                  <h3 style={{ fontWeight: "extrabold" }}>
                    79,99€
                    <span className="per-month"> / mois HT</span>
                  </h3>
                  {/* <h5 style={{ color: "#95a5a6" }}>(Au lieu de 959,88€/an)</h5> */}
                  <p
                    style={{
                      color: "#69CC00",
                      fontSize: "14px",
                      lineHeight: "23px",
                    }}
                  >
                    Économisez 959,88€ / an en vous inscrivant dès maintenant.
                  </p>
                  <Divider orientation="center"></Divider>
                </center>
                <FeatureRow>500 virements et prélèvements SEPA</FeatureRow>
                <FeatureRow>5 cartes physiques</FeatureRow>
                <FeatureRow>Cartes virtuelles illimités</FeatureRow>
                <FeatureRow>Comptes utilisateur illimités</FeatureRow>
                <FeatureRow>IBAN Français </FeatureRow>
                <FeatureRow>Limites de retrait 3000,00 € </FeatureRow>
                <FeatureRow>0.5% cashback par carte</FeatureRow>
                <FeatureRow>Assistance 7j/7 </FeatureRow>
                <FeatureRow>Accès pour votre comptable </FeatureRow>
                <FeatureRow>Rôles et permissions</FeatureRow>
                <FeatureRow>Support client prioritaire</FeatureRow>
                <FeatureRow>Suivi personnalisé de compte</FeatureRow>

                <AnchorLink href="#top">
                  <EntrepriseButton>Pré-inscription</EntrepriseButton>
                </AnchorLink>

                <FormSubtitle>30 jours gratuits - Sans engagement</FormSubtitle>
              </div>
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              className="gutter-row"
              style={{
                display: `${companyExist ? "block" : "none"}`,
              }}
            >
              <div className="custom-card" style={{ height: "auto" }}>
                <center>
                  <img
                    src={Unicorn}
                    alt="Sur-demande"
                    className="emojiPricing"
                    height="50px"
                  />
                  <FeatureTitle>Corporate</FeatureTitle>
                  <h3 style={{ fontWeight: "extrabold", fontSize: "34px" }}>
                    Sur demande
                  </h3>
                  <p
                    style={{
                      color: "#455980",
                      fontSize: "16px",
                      lineHeight: "23px",
                    }}
                  >
                    Un compte simple et efficace pour gérer votre activité au
                    quotidien.
                  </p>
                  <Divider orientation="center"></Divider>
                </center>

                <EntrepriseButton
                  style={{ position: "relative", bottom: "7px" }}
                  onClick={() => mailTo()}
                >
                  Nous contacter
                </EntrepriseButton>
              </div>
            </Col>
          </Row>

          {/* <Row
            gutter={16}
            justify="center"
            style={{
              opacity: `${companyExist ? "0" : "0"}`,

              transition: "0.2s ease-in-out",
            }}
          >
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              className="gutter-row"
              style={{
                display: `${companyExist ? "none" : "block"}`,
              }}
            >
              <div className="custom-card">
                <center>
                  <img
                    src={Chicken}
                    alt=""
                    className="emojiPricing"
                    height="50px"
                  />
                  <h2 style={{ fontSize: "24px" }}>Pack Solo</h2>
                  <h3 style={{ fontWeight: "extrabold" }}>
                    119,99€
                    <span className="per-month"> HT</span>
                  </h3>
                  <p
                    style={{
                      color: "#455980",
                      fontSize: "16px",
                      lineHeight: "23px",
                    }}
                  >
                    Un compte simple et efficace pour gérer votre activité au
                    quotidien.
                  </p>
                  <Divider orientation="center"></Divider>
                </center>
                <FeatureRow>
                  <FileProtectOutlined /> Dépôt du capital social
                </FeatureRow>
                <FeatureRow>
                  <CreditCardOutlined /> 12 mois d'abonnement au forfait Solo
                </FeatureRow>
                <Divider orientation="center"></Divider>
                <FeatureRow>20 virements et prélèvements SEPA</FeatureRow>
                <FeatureRow>1 carte physique </FeatureRow>
                <FeatureRow>Cartes virtuelles en option</FeatureRow>
                <FeatureRow>1 compte utilisateur</FeatureRow>
                <FeatureRow>IBAN Français </FeatureRow>
                <FeatureRow>Support 7 jours/7 </FeatureRow>

                <AnchorLink href="#top">
                  <EntrepriseButton>Pré-inscription</EntrepriseButton>
                </AnchorLink>

                <FormSubtitle>30 jours gratuits - Sans engagement</FormSubtitle>
              </div>
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              className="gutter-row"
              style={{
                display: `${companyExist ? "none" : "block"}`,
              }}
            >
              <div className="custom-card">
                <center>
                  <img
                    src={Dove}
                    alt=""
                    className="emojiPricing"
                    height="50px"
                  />
                  <h2 style={{ fontSize: "24px" }}>Pack Standard</h2>
                  <h3 style={{ fontWeight: "extrabold" }}>
                    299,99€
                    <span className="per-month"> HT</span>
                  </h3>
                  <p
                    style={{
                      color: "#455980",
                      fontSize: "16px",
                      lineHeight: "23px",
                    }}
                  >
                    Un compte simple et efficace pour gérer votre activité au
                    quotidien.
                  </p>
                  <Divider orientation="center"></Divider>
                </center>
                <FeatureRow>
                  <FileProtectOutlined /> Dépôt du capital social
                </FeatureRow>
                <FeatureRow>
                  <CreditCardOutlined /> 12 mois d'abonnement au forfait Solo
                </FeatureRow>
                <Divider orientation="center"></Divider>
                <FeatureRow>100 virements et prélèvements SEPA</FeatureRow>
                <FeatureRow>2 cartes physiques </FeatureRow>
                <FeatureRow>2 cartes virtuelles</FeatureRow>
                <FeatureRow>5 comptes utilisateur</FeatureRow>
                <FeatureRow>IBAN Français </FeatureRow>
                <FeatureRow>Support 7 jours/7 </FeatureRow>
                <FeatureRow>Accès pour votre comptable </FeatureRow>
                <FeatureRow>Rôles et permissions</FeatureRow>

                <AnchorLink href="#top">
                  <EntrepriseButton>Pré-inscription</EntrepriseButton>
                </AnchorLink>
                <FormSubtitle>30 jours gratuits - Sans engagement</FormSubtitle>
              </div>
            </Col>
          </Row>
        */}
        </Container>
      </EntrepriseWrapper>
    </>
  )
}

export default Entreprise

const EntrepriseWrapper = styled.header`
  background-color: white;
  padding: 100px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const EntrepriseTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${(props) => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${(props) => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const EntrepriseForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FeatureRow = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`

const FeatureTitle = styled.h2`
  font-size: 24px;
  font-family: ${(props) => props.theme.font.bold};
  text-align: center;
`

const FormSubtitle = styled.span`
  font-weight: 300;
  position: absolute;
  font-size: 13px;
  bottom: 40px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  text-align: center;

  margin-right: -1000px;
`

const EntrepriseButton = styled.button`
  font-family: "SF Pro Display Semibold";
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 40px;
  display: block;
  position: absolute;
  bottom: 70px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 10%;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
