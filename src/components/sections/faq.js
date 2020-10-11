import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

import { Collapse, Row, Col } from "antd"
const { Panel } = Collapse

const Faq = () => (
  <StyledSection id="faq">
    <GetStartedContainer>
      <Subtitle>FAQ</Subtitle>
      <GetStartedTitle>
        Questions les plus fréquentes
      </GetStartedTitle>
    </GetStartedContainer>
    <Container>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              paddingBottom: "20px",
            }}
          >
            <Collapse ghost>
              <Panel
                className="faqTitle"
                header="Qui peut ouvrir un compte Klark ?"
                key="1"
              >
                <p>
                  Klark est accessible à l’ensemble des professionnels et
                  entreprises : SA, SAS, SASU, SARL, SC & SCI, EURL, professions
                  libérales, micro-entreprises. Pour le moment, Klark n’est pas
                  disponible pour les associations et les SCI.
                </p>
              </Panel>
              <Panel
                className="faqTitle"
                header="Y a-t-il une différence entre Klark et une banque traditionnelle ?"
                key="2"
              >
                <p>
                  Klark est un agent prestataire de service de paiement, régulé
                  par la FCA (Banque d’Angleterre), et enregistré sous le numéro
                  885 401 265. Cela permet à Klark de vous offrir tous les
                  outils nécessaires à la gestion de votre compte professionnel
                  : carte Mastercard, compte courant avec IBAN français,
                  retraits aux distributeurs. Pour garantir la sécurité des
                  fonds, Klark travaille en partenariat avec des banques
                  traditionnelles, qui bénéficient d’une protection totale des
                  fonds. Klark, ne peut ni investir, ni prêter ou toucher aux
                  fonds de ses clients. À la différence d’un compte dans une
                  banque traditionnelle, un compte Klark ne peut pas être à
                  découvert, et il n’est pas possible d’encaisser de l’argent
                  liquide.
                </p>
              </Panel>
              <Panel
                className="faqTitle"
                header="Est-ce que je peux résilier ou modifier mon offre abonnement à tout moment ?"
                key="3"
              >
                <p>
                  Klark est un service sans engagement : vous pouvez résilier
                  votre abonnement et fermer votre compte à tout moment.
                </p>
              </Panel>
              <Panel
                header="J'ai déjà un compte pro: dois-je le fermer ?"
                key="5"
                className="faqTitle"
              >
                <p>
                  Klark peut aussi bien servir de compte principal que de compte
                  secondaire pour votre entreprise. Si vous le souhaitez, rien
                  ne vous empêche de conserver votre ancien compte professionnel
                  ouvert. Mais si vous le désirez, Klark peut servir de compte
                  unique pour votre entreprise.
                </p>
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </Container>
  </StyledSection>
)

export default Faq

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
`

const TryItButton = styled.button`
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

const Subtitle = styled.span`
  ${(props) => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.color.primary};
`
