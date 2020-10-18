import React, { useRef } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Row, Col } from "antd"
import { Container, Section } from "../global"
import CashbackImg from "../../images/cashback.jpeg"

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
      <Row gutter={16} justify="center">
        <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <StepCard>
            <h3>Cash back illimité</h3>
            <StepDesc>
              A chaque fois que vous achetez quelque chose avec la carte Klark,
              vous recevez 0.50% en cash. Ce n’est ni des points de fidélités,
              ni des récompenses et ca n’expire jamais. Ce cash directement est
              chargé sur votre compte Klark, tous les jours, et c’est illimité.
              Vous pouvez payez partout dans le monde, et même en ligne.
            </StepDesc>
          </StepCard>
        </Col>

        <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <StepCard style={{ padding: "0%" }}>
            <center>
              <img
                src={CashbackImg}
                alt="SMS"
                style={{
                  width: "100%",
                  borderRadius: "25px",
                  height: "420px",
                  objectFit: "cover",
                }}
              />
            </center>
          </StepCard>
        </Col>
        <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <StepCard style={{ height: "auto", backgroundColor: "black" }}>
            <h3 style={{ color: "white" }}>Jusqu'à 10% remboursés</h3>
            <StepDesc style={{ color: "white" }}>
              Chaque fois que vous dépensez chez nos 18,000 marchands
              sélectionnés. La liste sera bientôt consultable au grand public et
              mise à jour régulièrement.
            </StepDesc>
          </StepCard>
        </Col>
      </Row>
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
  margin: 0 auto 32px;
  text-align: center;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 5%;
    margin-right: 5%;
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
  padding: 10%;
  width: 100%;
  height: 420px;
  align-item: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
`

const StepNumber = styled.span`
  border: 4px solid #0055ff;
  padding: 10px 15px;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  color: #0055ff;
  font-size: 20px;
  margin-bottom: 50px;
  font-family: "SF Pro Display Black";
`
const StepDesc = styled.h4`
  color: black;
  font-size: 18px;
`
