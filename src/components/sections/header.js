import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Row, Col, message, Button, Space } from "antd"
import { Container } from "../global"
import { CheckOutlined } from "@ant-design/icons"
import emailjs from "emailjs-com"

import Dashboard from "../../images/Dashboard.png"
import iPhone from "../../images/iphone.svg"

class Header extends React.Component {
  componentDidMount() {
    document.getElementById("phoneForm").focus()
  }

  handleSubmit = (e) => {
    e.preventDefault() 

    emailjs
      .sendForm(
        "service_klark1",
        "template_pgc21ve",
        e.target,
        "user_8ayg8CTlErK7KugcDtbmo"
      )
      .then(
        (result) => {
          message
            .success(
              "Votre pré-inscription a bien été prise en compte. Merci !",
              3
            )
            .then(() => window.location.reload())
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  render() {
    return (
      <HeaderWrapper id="top">
        <Container>
          <Flex>
            <HeaderTextGroup>
              <Subtitle>La Néobanque du Futur</Subtitle>
              <h1 style={{ fontFamily: "HK Grotesk Extra Bold" }}>
                Néobanque pour les Entreprises.
              </h1>
              <h5>
                <Row gutter={8}>
                  <Col>
                    <CheckOutlined style={{ color: "green" }} />
                  </Col>
                  <Col>
                    <span>Ouverture en 10 minutes, 100% en ligne.</span>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col>
                    <CheckOutlined style={{ color: "green" }} />
                  </Col>
                  <Col>
                    <span>Service client 7j/7.</span>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col>
                    <CheckOutlined style={{ color: "green" }} />
                  </Col>
                  <Col>
                    <span>IBAN FR, cartes physiques et virtuelles.</span>
                  </Col>
                </Row>
              </h5>

              <h4 style={{ marginTop: "7%", fontSize: "20px" }}>
                Inscrivez-vous maintenant et bénéficiez de -50% à vie.
              </h4>
              <HeaderForm
                onSubmit={this.handleSubmit}
                style={{ marginTop: "3%" }}
                id="open-account"
              >
                <HeaderInput
                  id="phoneForm"
                  placeholder="Numéro de téléphone"
                  name="phone_number"
                  type="tel"
                  pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}|[0-9]{10}"
                />
                <HeaderButton>Pré-inscription</HeaderButton>
              </HeaderForm>
              <FormSubtitle>Sortie prévue décembre 2020.</FormSubtitle>
            </HeaderTextGroup>
            <ImageWrapper>
              <div className="dashboard">
                <img
                  src={Dashboard}
                  alt=""
                  className="resizeImg"
                  width="130%"
                  style={{
                    objectFit: "scale-down",
                  }}
                />
              </div>
              <StyledImage
                className="headerImg"
                // fluid={iPhone}
                src={iPhone}
                alt=""
              />
              <br />
            </ImageWrapper>
          </Flex>
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    padding: 90px 0 80px 0;
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
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

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${(props) => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${(props) => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${(props) => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-family: "HK Grotesk Semibold";
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
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled.img`
  width: 300px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 200px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 200px;
  }
`
