import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

import "../../styles/GlobalStyles.js"

import bankEmoji from "../../images/bank-emoji.png"
import cardEmoji from "../../images/card-emoji.png"
import factoryEmoji from "../../images/factory-emoji.png"
import notepadEmoji from "../../images/notepad-emoji.png"
import messageEmoji from "../../images/message-emoji.png"

const Features = () => (
  <Section id="fonctionnalités">
    <StyledContainer>
      <Subtitle>Fonctionnalités</Subtitle>
      <SectionTitle>Voici Klark.</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>
            <img src={bankEmoji} alt="" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Compte Pro</FeatureTitle>
          <FeatureText>
            Un compte pour les profesionnels, tout simplement.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={cardEmoji} alt="" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>MasterCard Business</FeatureTitle>
          <FeatureText>
            Une carte professionnelle pour votre entreprise.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={factoryEmoji} alt="" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Création d'entreprise</FeatureTitle>
          <FeatureText>
            Une carte professionnelle pour votre entreprise.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={notepadEmoji} alt="" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Attestation de Dépôt</FeatureTitle>
          <FeatureText>
            Votre attestation de dépôt en moins de 24 heures.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={messageEmoji} alt="" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Assisstance 7j/7</FeatureTitle>
          <FeatureText>
            Une équipe pour vous accompagner dans vos projets.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>
            <img src={messageEmoji} alt="" className="emoji" />
          </FeatureTitle>
          <FeatureTitle>Assisstance 7j/7</FeatureTitle>
          <FeatureText>
            Une équipe pour vous accompagner dans vos projets.
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
  display: flex;
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
