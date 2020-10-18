import React from "react"
import styled from "styled-components"
import { Container } from "../global"
import { Row, Col } from "antd"
import "../../../src/styles/GlobalStyles"
import SignIn from "../../images/sign-in.svg"
import Sms from "../../images/sms.svg"
import CreditCard from "../../images/credit-card.svg"

const Steps = () => {
  return (
    <>
      <StepsWrapper id="tarifs">
        <HeaderTitleSteps>
          Ouverture de votre compte Klark
          <br /> en quelques minutes
        </HeaderTitleSteps>
        <Container>
          <Row gutter={16}>
            <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
              <StepCard>
                <center>
                  <h3>
                    <StepNumber>1</StepNumber>
                  </h3>
                  <img
                    src={SignIn}
                    alt="Inscription"
                    style={{
                      width: "70%",
                      margin: "40px 0",
                    }}
                  />
                  <StepDesc>
                    Je me pré-inscris.
                    <br />
                    &nbsp;
                  </StepDesc>
                </center>
              </StepCard>
            </Col>

            <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
              <StepCard>
                <center>
                  <h3>
                    <StepNumber>2</StepNumber>
                  </h3>
                  <img
                    src={Sms}
                    alt="SMS"
                    style={{
                      width: "70%",
                      margin: "40px 0",
                    }}
                  />
                  <StepDesc>
                    Je reçois un SMS en décembre pour finaliser mon inscription
                  </StepDesc>
                </center>
              </StepCard>
            </Col>

            <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
              <StepCard>
                <center>
                  <h3>
                    <StepNumber>3</StepNumber>
                  </h3>
                  <img
                    src={CreditCard}
                    alt="Card"
                    style={{
                      width: "70%",
                      margin: "40px 0",
                    }}
                  />
                  <StepDesc>
                    J’accède à mon compte.
                    <br /> Carte physique livrée en 7 jours.
                  </StepDesc>
                </center>
              </StepCard>
            </Col>
          </Row>
        </Container>
      </StepsWrapper>
    </>
  )
}

export default Steps

const HeaderTitleSteps = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 5%;
    margin-right: 5%;
  }
`

const StepsWrapper = styled.header`
  background-color: white;
  padding: 100px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: white;
  letter-spacing: 0px;
  margin-bottom: 16px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
  }
`

const FeatureText = styled.h5`
  font-size: 18px;
  color: white;
  font-weight: 500;
  margin-bottom: 30px;
  width: 65%;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100%;
    margin-left: 2%;
    margin-right: 2%;
  }
`
const StepCard = styled.div`
  margin-top: 30px;
  background-color: #fff;
  border-radius: 25px;
  padding: 10% !important;
  width: 100%;
  height: 500px;
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
  position: absolute;
  bottom: 5%;
  right: 10%;
  left: 10%;
  color: black;
  font-size: 18px;
`
