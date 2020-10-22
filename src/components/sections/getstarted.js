import React, { useRef } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Row, Col } from "antd"
import { Container, Section } from "../global"
import CashbackImg from "../../images/card-grey.svg"
import PerksImg from "../../images/perks.svg"

const GetStarted = () => (
  <StyledSection id="klark">
    <GetStartedContainer>
      <GetStartedTitle>
        0.5% remboursées sur toutes vos dépenses
        <br /> avec la carte Klark.
      </GetStartedTitle>
      <AnchorLink href="#top">
        <TryItButton>Pré-inscription</TryItButton>
      </AnchorLink>
      <Subtitle>Inscrivez-vous maintenant et profitez de -50% à vie.</Subtitle>

      <StepCard
        style={{ height: "auto", backgroundColor: "white", padding: "0" }}
      >
        <Row gutter={24} justify="left">
          <Col
            md={{ span: 11 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            className="specialCol"
          >
            <h4 style={{ fontSize: "40px", lineHeight: "50px" }}>
              Gagner de l'argent en payant.
            </h4>
            <StepDesc>
              A chaque fois que vous achetez quelque chose avec la carte Klark,
              vous recevez 0.50% en cash.
              <br /> Ce n’est ni des points de fidélités, ni des récompenses et
              ca n’expire jamais. Ce cash est directement chargé sur votre
              compte Klark, tous les jours, et c’est illimité. Vous pouvez payez
              partout dans le monde, et même en ligne.
            </StepDesc>
          </Col>

          <Col
            md={{ span: 12, offset: 1 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ padding: "0" }}
          >
            <center>
              <img
                src={CashbackImg}
                alt="Pers"
                className="headerImg"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  padding: "10%",
                  marginTop: "70px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </center>
          </Col>
        </Row>
      </StepCard>

      <StepCard
        style={{ height: "auto", backgroundColor: "black", padding: "0" }}
      >
        <Row gutter={24} justify="left">
          <Col
            md={{ span: 11 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            className="specialCol"
          >
            <h4
              style={{
                color: "white",
                fontSize: "40px",
                lineHeight: "50px",
                width: "100%",
                backgroundColor: "transparent",
              }}
            >
              Jusqu'à 10% remboursés
            </h4>
            <StepDesc style={{ color: "white" }}>
              Chaque fois que vous dépensez chez nos 18,000 marchands
              sélectionnés. La liste sera bientôt consultable au grand public et
              mise à jour régulièrement.
            </StepDesc>
          </Col>

          <Col
            md={{ span: 12, offset: 1 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{
              padding: "5%",
              backgroundColor: "transparent",
            }}
          >
            <center>
              <img
                src={PerksImg}
                alt="Pers"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </center>
          </Col>
        </Row>
      </StepCard>
    </GetStartedContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 calc(100% - 5vw));
  padding-bottom: 10%;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 100px auto 32px;
  text-align: center;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 200px;
  }
`

const TryItButton = styled.button`
  font-family: "SF Pro Display Semibold";
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
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

const Subtitle = styled.span`
  ${(props) => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color.primary};
`
const StepCard = styled.div`
  margin-top: 30px;
  background-color: #fff;
  border-radius: 25px;
  padding: 7% 10% 10% 10%;
  width: 100%;
  height: 420px;
  align-item: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 95%;
    margin-right: auto;
    margin-left: auto;
  }
`
const StepDesc = styled.p`
  color: grey;
  font-size: 18px;
  line-height: 30px;
  font-family: "SF Pro Display Regular";
  margin-top: 30px;
`
