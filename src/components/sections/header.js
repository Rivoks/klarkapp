import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "antd"
import { Container } from "../global"
import { CheckOutlined } from "@ant-design/icons"

import Dashboard from "../../images/dashboard.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "iphone" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>La Néobanque du Futur</Subtitle>
            <h1>
              Néobanque pour les Entreprises. Startup.
              <br />
              Freelancers.
            </h1>
            <h5>
              <Row gutter={8}>
                <Col>
                  <CheckOutlined style={{ color: "green" }} />
                </Col>
                <Col>
                  <span>Ouverture en 5 minutes depuis votre iPhone.</span>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col>
                  <CheckOutlined style={{ color: "green" }} />
                </Col>
                <Col>
                  <span>Service client 7/7. Ultra réactif.</span>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col>
                  <CheckOutlined style={{ color: "green" }} />
                </Col>
                <Col>
                  <span>Ouverture en 5 minutes depuis votre iPhone.</span>
                </Col>
              </Row>
            </h5>
            <HeaderForm
              onSubmit={handleSubmit}
              style={{ marginTop: "7%" }}
              id="open-account"
            >
              <HeaderInput placeholder="Numéro de téléphone" />
              <HeaderButton>Ouvrir un compte</HeaderButton>
            </HeaderForm>
            <FormSubtitle>
              Klark vous garantie de ne pas divulguer vos informations.
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage
              className="headerImg"
              fluid={data.file.childImageSharp.fluid}
            />
            <br />
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
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
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
  font-weight: 500;
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

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
