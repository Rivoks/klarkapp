import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

import "../../styles/GlobalStyles.js"

import bankEmoji from "../../images/bank-emoji.webp"
import cardEmoji from "../../images/card-emoji.webp"
import messageEmoji from "../../images/message-emoji.webp"
import rocketEmoji from "../../images/rocket-emoji.webp"

const Features = () => (
  <Section id="fonctionnalités">
    <StyledContainer>
      <Subtitle>Voici Klark V1</Subtitle>
      <SectionTitle>
        C'est comme une banque, en plus simple et rapide
      </SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>
            <img src={bankEmoji} alt="compte-pro" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Compte Pro en ligne</FeatureTitle>
          <FeatureText>IBAN FR et virements instantanés.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={cardEmoji} alt="cartes-mastercard" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Cartes MasterCard</FeatureTitle>
          <FeatureText>Cartes physiques et virtuelles illimitées.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={rocketEmoji} alt="hauts-plafonds" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Hauts plafonds</FeatureTitle>
          <FeatureText>
            Des plafonds 7x supérieur par rapport aux autres banques.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img
              src={messageEmoji}
              alt="assistance-permanente"
              className="emoji"
            />
          </FeatureTitle>
          <FeatureTitle>Assistance 24/7</FeatureTitle>
          <FeatureText>
            Parlez à des experts compétents basés en France.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  ${"" /* display: flex; */}
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
