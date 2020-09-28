import React from "react"
import styled from "styled-components"
import { Container } from "../global"
import { Row, Col, Divider } from "antd"
import "../../../src/styles/GlobalStyles"
import SplashImg from "../../images/splash.png"
import Transaction from "../../images/bell-emoji.png"
import collabEmoji from "../../images/collab-emoji.png"
import cardEmoji from "../../images/card-emoji.png"
import transfertEmoji from "../../images/bolt-emoji.png"

const Splash = () => {
  return (
    <>
      <SplashWrapper id="tarifs">
        <Container className="blueBlock">
          <Row gutter={16}>
            <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
              <SplashTextGroup>
                <Subtitle
                  style={{
                    paddingTop: "5%",
                    paddingLeft: "10%",
                  }}
                >
                  Comme une banque, mais en mieux.
                </Subtitle>
                <h3
                  style={{
                    marginBottom: "60px",
                    color: "white",
                    paddingLeft: "10%",
                  }}
                >
                  Nous avons tout ce que vous avez besoin.
                </h3>
                <FeatureText>
                  <Row style={{ marginBottom: "10%" }}>
                    <Col span={4}>
                      <img
                        src={Transaction}
                        alt=""
                        style={{ height: "40px" }}
                      />
                    </Col>
                    <Col span={20}>Toutes vos transactions en temps réel.</Col>
                  </Row>
                  <Row style={{ marginBottom: "10%" }}>
                    <Col span={4}>
                      <img src={cardEmoji} alt="" style={{ height: "40px" }} />
                    </Col>
                    <Col span={20}>Cartes virtuelles instantanées.</Col>
                  </Row>

                  <Row style={{ marginBottom: "10%" }}>
                    <Col span={4}>
                      <img
                        src={collabEmoji}
                        alt=""
                        style={{ height: "40px" }}
                      />
                    </Col>
                    <Col span={20}>Espace pour votre comptable.</Col>
                  </Row>

                  <Row style={{ marginBottom: "10%" }}>
                    <Col span={4}>
                      <img
                        src={transfertEmoji}
                        alt=""
                        style={{ height: "40px", marginTop: "10px" }}
                      />
                    </Col>
                    <Col span={20}>
                      Virements instantanés jusqu'à <br /> 100 000€.
                    </Col>
                  </Row>
                </FeatureText>
              </SplashTextGroup>
            </Col>
            <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
              <img
                className="headerImg"
                src={SplashImg}
                alt=""
                style={{
                  width: "100%",
                  marginRight: "0px",
                  marginTop: "15px",
                  marginBottom: "30px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </SplashWrapper>
    </>
  )
}

export default Splash

const SplashWrapper = styled.header`
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
`

const FeatureText = styled.h5`
  font-size: 18px;
  color: white;
  font-weight: 500;
  margin-bottom: 30px;
  margin-left: 10%;
  width: 65%;
`

const SplashTextGroup = styled.div`
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

const SplashForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FeatureRow = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
`

const SplashButton = styled.button`
  font-family: "HK Grotesk Semibold";
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
