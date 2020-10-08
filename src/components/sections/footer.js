import React from "react"
import styled from "styled-components"

import { Container } from "../global"

import GPlay from "../../images/gplay.png"
import AStore from "../../images/appstore.png"
import { Link } from "gatsby"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <ul>
          {/* <li>
            <a href="#">
              <ImageStore src={GPlay} alt="PlayStore"></ImageStore>
            </a>
          </li> */}
          <li>
            <a href="#">
              <ImageStore src={AStore} alt="Apple Store"></ImageStore>
            </a>
          </li>
        </ul>
      </FooterColumn>

      {/* <span>Réseaux</span>
        <ul>
          <li>
            <a href="http://medium.com/@klarkbank" className="footer-links">
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/klarkbank/"
              className="footer-links"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/klarkbank" className="footer-links">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/klarkbank/"
              className="footer-links"
            >
              Linkedin
            </a>
          </li>
        </ul> */}

      <FooterColumn>
        <span>Support</span>
        <ul>
          <li>
            <a href="mailto:press@klark.app" className="footer-links">
              Presse
            </a>
          </li>
          <li>
            <a href="mailto:hello@klark.app" className="footer-links">
              Contact
            </a>
          </li>
          <li>
            <a href="http://medium.com/@klarkbank" className="footer-links">
              Blog
            </a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>À propos</span>
        <ul>
          <li>
            <Link to="/privacy" className="footer-links">
              Confidentialité
            </Link>
          </li>
          <li>
            <Link to="/legacy" className="footer-links">
              Mentions Légales
            </Link>
          </li>
          <li>
            <Link to="/terms" className="footer-links">
              Conditions générales
            </Link>
          </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    {/* <BrandContainer>
      <Logo>
        <a href="#top">Klark</a>
      </Logo>
    </BrandContainer> */}
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const ImageStore = styled.img`
  width: 150px;
`

const Logo = styled.div`
  font-family: ${(props) => props.theme.font.extrabold};
  ${(props) => props.theme.font_size.regular};
  color: ${(props) => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${(props) => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
