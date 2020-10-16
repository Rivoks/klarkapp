import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation2 from "../components/common/navigation/navigation2"
import styled from "styled-components"
import { Container } from "./../components/global"
import Zendesk from "react-zendesk"

import Footer from "../components/sections/footer"

class PrivacyPage extends React.Component {
  state = {
    showZendesk: false,
  }
  componentDidMount() {
    this.setState({ showZendesk: true })
  }
  render() {
    const { showZendesk } = this.state

    const setting = {
      color: {
        theme: "#0055FF",
      },
      launcher: {
        chatLabel: {
          "en-US": "Need Help",
        },
      },
      contactForm: {
        fields: [
          { id: "description", prefill: { "*": "My pre-filled description" } },
        ],
      },
    }
    return (
      <Layout>
        <SEO title="Confidentialité" />
        <Navigation2 />
        {showZendesk ? (
          <Zendesk
            zendeskKey={"7af8bdac-02dc-433b-90b0-6866f6dc6901"}
            {...setting}
          />
        ) : (
          <></>
        )}

        <Container>
          <Title>Politiques de confidentialités</Title>
          <p>
            La pr&eacute;sente Politique de confidentialit&eacute; a pour objet
            de vous informer sur la collecte, l&rsquo;utilisation et le
            traitement de vos donn&eacute;es personnelles saisies lors de
            l&rsquo;utilisation de notre site Internet https://klark.app
            (ci-apr&egrave;s, le &laquo; Site Internet &raquo;), de notre
            application Internet (ci-apr&egrave;s, &laquo; l&rsquo;Application
            Internet &raquo;) et de notre application mobile (ci-apr&egrave;s,
            &laquo; l&rsquo;Application &raquo; ; et collectivement, les &laquo;
            Services &raquo;).   Si des informations ont trait exclusivement
            &agrave; notre Site Internet, &agrave; notre Application Internet ou
            &agrave; notre Application, nous vous le pr&eacute;ciserons
            explicitement.  Dans ce contexte, les &laquo; donn&eacute;es
            personnelles &raquo; d&eacute;signent toutes les informations
            d&eacute;taill&eacute;es relatives &agrave; la situation personnelle
            ou factuelle d'une personne physique sp&eacute;cifique ou
            identifiable, telles que son nom, son num&eacute;ro de
            t&eacute;l&eacute;phone ou son adresse.  
          </p>
          <p>
            Nous traitons vos donn&eacute;es personnelles soit dans le cadre de
            notre relation commerciale avec vous si vous &ecirc;tes un client
            Klark, dans le cadre de votre visite de notre site web pour
            information.  Si cela est n&eacute;cessaire &agrave; la fourniture
            de nos services, nous transf&eacute;rons en outre vos donn&eacute;es
            personnelles &agrave; des tierces parties qui traitent vos
            donn&eacute;es en toute l&eacute;galit&eacute; (p.&nbsp;ex.,
            &agrave; des fins d&rsquo;ex&eacute;cution d&rsquo;ordres ou de
            contrats, ou conform&eacute;ment &agrave; votre consentement).  
          </p>
          <p>
            Enfin, nous traitons les donn&eacute;es personnelles issues de
            sources du domaine public (p.&nbsp;ex., registre de
            d&eacute;biteurs, registres du commerce, registres
            d&rsquo;associations, m&eacute;dia, presse, Internet).    
            <br /> <br /> <strong>I. Autorit&eacute; responsable</strong>   
            <br /> <br /> L&rsquo;autorit&eacute; responsable de la collecte, du
            traitement et de l&rsquo;utilisation de vos donn&eacute;es
            personnelles est : Klark, 31 Avenue de S&eacute;gur, 75007 Paris,
            France, a d&eacute;sign&eacute; un d&eacute;l&eacute;gu&eacute;
            &agrave; la protection des donn&eacute;es joignable &agrave;
            l&rsquo;adresse e-mail{" "}
            <a href="mailto:contact@klark.app">contact@klark.app</a> .  
          </p>
          <p>&nbsp;</p>
          <ol>
            <li>
              <strong>
                {" "}
                Objet du traitement des donn&eacute;es et cadre l&eacute;gal
              </strong>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            Nous traitons vos donn&eacute;es personnelles dans le respect du
            R&egrave;glement g&eacute;n&eacute;ral sur la protection des
            donn&eacute;es (RGPD) si l&rsquo;une des conditions suivantes est
            remplie&nbsp;:
          </p>
          <p>&nbsp;</p>
          <ul>
            <li>
              le traitement est n&eacute;cessaire &agrave; l'ex&eacute;cution
              d'un contrat auquel la personne concern&eacute;e est partie ou
              &agrave; l'ex&eacute;cution de mesures pr&eacute;contractuelles
              prises &agrave; la demande de celle-ci (art.&nbsp;6.1 b) du RGPD.
               Les donn&eacute;es personnelles sont trait&eacute;es pour
              ex&eacute;cuter des services financiers et des transactions
              bancaires afin de remplir nos obligations contractuelles et
              pr&eacute;contractuelles. Ces actions sont uniquement
              ex&eacute;cut&eacute;es &agrave; votre demande. Vous trouverez
              l&rsquo;objet du traitement des donn&eacute;es dans la
              cat&eacute;gorie de produit pertinente ainsi que dans les
              conditions g&eacute;n&eacute;rales. Le traitement des
              donn&eacute;es peut comprendre l&rsquo;analyse des besoins, la
              consultation, la gestion de portefeuilles, le soutien des actifs
              ainsi que l&rsquo;ex&eacute;cution de transactions.
            </li>
            <li>
              la personne concern&eacute;e a consenti au traitement de ses
              donn&eacute;es &agrave; caract&egrave;re personnel pour une ou
              plusieurs finalit&eacute;s sp&eacute;cifiques (art.&nbsp;6.1 a) du
              RGPD).  Si vous avez consenti au traitement de vos donn&eacute;es
              &agrave; caract&egrave;re personnel &agrave; des fins
              sp&eacute;cifiques, le traitement de ces donn&eacute;es est
              autoris&eacute; sur la base de votre consentement.  Votre
              consentement est r&eacute;vocable &agrave; tout moment. Si vous
              r&eacute;voques votre consentement, tout traitement de vos
              donn&eacute;es personnelles effectu&eacute; apr&egrave;s la
              r&eacute;vocation sera r&eacute;put&eacute; ill&eacute;gal.   Par
              cons&eacute;quent, le traitement ant&eacute;rieur de vos
              donn&eacute;es personnelles demeure l&eacute;gal. Vous pouvez
              demander des informations sur les consentements que vous avez
              donn&eacute;s, &agrave; tout moment.
            </li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li>
              le traitement est n&eacute;cessaire aux fins des
              int&eacute;r&ecirc;ts l&eacute;gitimes poursuivis par le
              responsable du traitement ou par un tiers, &agrave; moins que ne
              pr&eacute;valent les int&eacute;r&ecirc;ts ou les libert&eacute;s
              et droits fondamentaux de la personne concern&eacute;e qui exigent
              une protection des donn&eacute;es &agrave; caract&egrave;re
              personnel, notamment lorsque la personne concern&eacute;e est un
              enfant (art.&nbsp;6.1 f) du RGPD).  Si n&eacute;cessaire, nous
              traiterons vos donn&eacute;es personnelles au-del&agrave; de nos
              obligations contractuelles afin de prot&eacute;ger nos
              int&eacute;r&ecirc;ts l&eacute;gitimes ou ceux d&rsquo;un tiers.
                Exemples&nbsp;: o exercice des droits de r&eacute;clamation et
              de d&eacute;fense dans le cadre de litiges&nbsp;;  <br /> o
              s&eacute;curit&eacute; informatique&nbsp;;  <br /> o
              pr&eacute;vention des actes criminels&nbsp;;  <br /> o gestion de
              l&rsquo;entreprise et d&eacute;veloppement des services et des
              produits&nbsp;;  <br /> o gestion des risques au sein de
              l&rsquo;entreprise Klark.  
            </li>
            <li>
              le traitement est n&eacute;cessaire au respect d'une obligation
              l&eacute;gale &agrave; laquelle le responsable du traitement est
              soumis (art.&nbsp;6.1 c) du RGPD) et le traitement est
              n&eacute;cessaire &agrave; l'ex&eacute;cution d'une mission
              d'int&eacute;r&ecirc;t public ou relevant de l'exercice de
              l'autorit&eacute; publique dont est investi le responsable du
              traitement (art.&nbsp;6.1 e) du RGPD).   
              <br /> Klark est assujettie &agrave; plusieurs obligations
              l&eacute;gales et r&eacute;glementaires.  
            </li>
            <li>
              Par cons&eacute;quent, le traitement des donn&eacute;es est
              justifi&eacute; au titre de la loi f&eacute;d&eacute;rale
              Fran&ccedil;aise bancaire, de la loi de lutte contre le
              blanchiment de capitaux et des lois fiscales. En outre, la BCE
              (Banque centrale europ&eacute;enne), l&rsquo;ABE (Autorit&eacute;
              bancaire europ&eacute;enne), la FCA (Financial Conduct Authority)
              autorisent Klark &agrave; traiter les donn&eacute;es personnelles
              pour se conformer &agrave; leurs exigences r&eacute;glementaires. 
            </li>
            <li>
              L&rsquo;objet du traitement de vos donn&eacute;es personnelles est
              par exemple la v&eacute;rification de votre identit&eacute; et de
              votre &acirc;ge, la pr&eacute;vention contre le blanchiment de
              capitaux et la fraude, la v&eacute;rification de votre cote de
              cr&eacute;dit, vos obligations de contr&ocirc;le et de rapport du
              fait de la l&eacute;gislation fiscale et de
              l&rsquo;&eacute;valuation des risques de Klark.  
            </li>
            <li>
              Traitement pour le compte de Klark (Art. 28 RGPD): Lorsque le
              traitement des donn&eacute;es personnelles est effectu&eacute;
              pour le compte de Klark, nous concluons un contrat distinct avec
              le sous-traitant en ce qui concerne ce traitement. Ce contrat
              assure la conformit&eacute; au RGPD et d&eacute;finit des
              garanties suffisantes pour la mise en &oelig;uvre de mesures
              techniques et organisationnelles appropri&eacute;es, qui assurent
              la protection de vos droits.  
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>&nbsp;</strong>
          </p>
          <p>
            <strong>
              III. Traitement des donn&eacute;es dans le cadre des produits
              Klark.
            </strong>
          </p>
          <p>
             <br />{" "}
            <strong>
              3. Collecte et traitement des donn&eacute;es en cas
              d&rsquo;ouverture et d&rsquo;utilisation d&rsquo;un compte courant
              Klark.
            </strong>{" "}
            <br /> <br /> Les donn&eacute;es suivantes, entre autres, seront
            collect&eacute;es, utilis&eacute;es et trait&eacute;es par Klark,
            dans le but d'ouvrir un compte courant aupr&egrave;s de Klark et
            d&rsquo;utiliser les Services de Klark :&nbsp;
          </p>
          <p>&nbsp;</p>
          <ul>
            <li>Pr&eacute;nom et nom</li>
            <li>Date de naissance</li>
            <li>Lieu de naissance</li>
            <li>Adresse e-mail</li>
            <li>Nationalit&eacute;</li>
            <li>Adresse l&eacute;gale</li>
            <li>Num&eacute;ro de t&eacute;l&eacute;phone portable</li>
            <li>
              Pi&egrave;ce d'identit&eacute; incluant (pour les d&eacute;tails,
              cf. &laquo;&nbsp;Processus d&rsquo;identification&nbsp;&raquo;)
            </li>
            <li>Le type de pi&egrave;ce d'identit&eacute;</li>
            <li>La date de d&eacute;livrance</li>
            <li>Le num&eacute;ro de la pi&egrave;ce d&rsquo;identit&eacute;</li>
            <li>Et l&rsquo;autorit&eacute; de d&eacute;livrance.  </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            Sachez qu&rsquo;il est impossible d&rsquo;ouvrir un compte si vous
            ne fournissez pas vos donn&eacute;es personnelles. Pour traiter les
            transactions, Klark re&ccedil;oit des donn&eacute;es personnelles et
            les transf&egrave;re conform&eacute;ment &agrave;
            l&rsquo;article&nbsp;4 de la r&egrave;glementation sur le transfert
            de fonds aux organismes payeurs, aux destinataires et autres
            &eacute;tablissements financiers.  
          </p>
          <p>
            Vous pouvez envoyer de l'argent aux contacts de votre
            t&eacute;l&eacute;phone portable via Klark sans conna&icirc;tre
            leurs coordonn&eacute;es bancaires.  <br /> Si le destinataire est
            &eacute;galement un client de Klark, les transactions seront
            effectu&eacute;es en temps r&eacute;el.  Pour activer cette
            fonction, Klark acc&egrave;dera aux contacts enregistr&eacute;s sur
            votre terminal uniquement si vous y avez pr&eacute;alablement
            consenti.  
          </p>
          <p>
            En outre, en tant que titulaire d&rsquo;un compte courant chez
            Klark, vous serez visible par vos contacts s&rsquo;ils sont
            &eacute;galement clients de Klark uniquement si vous y avez
            express&eacute;ment consenti au pr&eacute;alable.  
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
             
            <strong>
              3.1. Transmission des donn&eacute;es dans le cadre du programme
              Visa Automatic Billing Updater Program
            </strong>
            .  
            <br /> <br /> Afin de pouvoir utiliser le Automatic Billing Updater
            (outil de mise &agrave; jour automatique des informations de
            facturation - &laquo;&nbsp;VAU&nbsp;&raquo;), les informations
            relatives &agrave; votre compte courant sont transmises &agrave;
            notre sous-traitant des donn&eacute;es Visa Europe Limited
            (&laquo;&nbsp;Visa Ltd.&nbsp;&raquo;), 1 Sheldon Square London, W2
            6TT United Kingdom.   VAU fournit des mises &agrave; jour
            automatiques des informations concernant votre Visa aux services
            tiers que vous utilisez et auxquels vous avez souscrit avec votre
            Visa.  VAU contribue ainsi &agrave; r&eacute;duire les refus
            &eacute;vitable lors de transaction sans carte en modifiant les
            informations stock&eacute;es sur les comptes de paiement.   &Agrave;
            cet effet, Klark transmet les informations relatives au titulaire de
            la carte (PAN du titulaire et date d'expiration de la carte) de
            m&ecirc;me que les informations relatives au paiement
            conform&eacute;ment &agrave; l&rsquo;article 6 (1) (b) du RGPD
            &agrave; Visa Ltd. Visa Ltd. traitera ces donn&eacute;es &agrave;
            caract&egrave;re personnel afin de fournir le service VAU, y compris
            le fait d&rsquo;h&eacute;berger et de maintenir la base de
            donn&eacute;es VAU et de comparer les demandes d'autorisation avec
            la base de donn&eacute;es VAU.   
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <strong>
              3.2. Transmission de donn&eacute;es dans le cadre de la Peer to
              Peer technology.
              <br /> &nbsp;
            </strong>
             
          </p>
          <p>
            Afin de pouvoir vous proposer notre technologie &laquo;&nbsp;Peer to
            Peer&nbsp;&raquo;, nous devons traiter les donn&eacute;es relatives
            &agrave; l'exp&eacute;diteur et au destinataire ainsi que certaines
            donn&eacute;es de transactions conform&eacute;ment &agrave;
            l&rsquo;article 6, paragraphe 1, point b du RGPD.  
          </p>
          <p>
            Les donn&eacute;es de transactions sont les m&ecirc;mes que celles
            d&rsquo;un virement bancaire ordinaire, &agrave; la
            diff&eacute;rence qu&rsquo;aucun IBAN n'est utilis&eacute;, mais une
            adresse e-mail ou un num&eacute;ro de t&eacute;l&eacute;phone et
            qu&rsquo;aucune donn&eacute;e n'est transmise &agrave; des tiers.  
          </p>
          <p>
             Pour utiliser cette technologie, les utilisateurs doivent
            s'&ecirc;tre rendus "visibles" et avoir autoris&eacute;
            l'acc&egrave;s &agrave; leur liste de contacts.  Cette fonction est
            bas&eacute;e sur votre consentement conform&eacute;ment &agrave;
            l'article 6, paragraphe 1, point a du RGPD (voir aussi la section
            II.).  
          </p>
          <p>
            Vous pouvez r&eacute;voquer ce consentement &agrave; tout moment
            dans l'application.   
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <strong>
              3.3. S&eacute;curit&eacute; et acc&egrave;s aux contacts dans le
              cadre de la Peer to Peer technology.{" "}
            </strong>
          </p>
          <p>&nbsp;</p>
          <p>
            Conform&eacute;ment &agrave; l&rsquo;article&nbsp;6,
            paragraphe&nbsp;1, point a), du RGDP, l&rsquo;utilisation de la Peer
            to Peer Technology requiert une autorisation pr&eacute;alable.
          </p>
          <p>
             En consentant &agrave; appara&icirc;tre comme client de Klark
            aupr&egrave;s des autres utilisateurs de Klark, vous d&eacute;gagez
            &agrave; cet &eacute;gard la banque Klark du secret bancaire.
          </p>
          <p>
             La seconde autorisation permet &agrave; la banque Klark
            d&rsquo;acc&eacute;der &agrave; vos contacts afin de vous indiquer
            lesquels comptent au nombre des utilisateurs de Klark, pour autant
            qu&rsquo;ils aient &eacute;galement consenti &agrave; &ecirc;tre
            &laquo;&nbsp;visibles&nbsp;&raquo;.  
          </p>
          <p>
            Vous pouvez r&eacute;voquer vos autorisations &agrave; tout moment
            via l&rsquo;application. Les autres utilisateurs ne voient ni les
            donn&eacute;es ni les contacts des utilisateurs qui ne sont pas
            clients de Klark ni ceux des clients de Klark qui ne se sont pas
            rendus &laquo;&nbsp;visibles&nbsp;&raquo;.  
          </p>
          <ul>
            <li>
              <strong>
                Transmission de donn&eacute;es personnelles &agrave;
                l&rsquo;&eacute;tranger{" "}
              </strong>
              <strong> </strong> <br /> <br /> Dans la mesure o&ugrave; Klark
              transmet des donn&eacute;es vers des &Eacute;tats ne relevant pas
              du champ d'application de la GDPR (R&egrave;glement 2016/679 du
              Parlement europ&eacute;en et du Conseil du 27 avril 2016 relative
              &agrave; la protection des personnes physiques &agrave;
              l'&eacute;gard du traitement des donn&eacute;es &agrave;
              caract&egrave;re personnel et &agrave; la libre circulation des
              donn&eacute;es), Klark s'assure que le destinataire des
              donn&eacute;es garantit un niveau suffisant de protection des
              donn&eacute;es.   
              <br /> Afin d'assurer un niveau suffisant de protection par le
              destinataire des donn&eacute;es, nous utilisons les contrats
              standard de l'Union europ&eacute;enne pour la transmission des
              donn&eacute;es en dehors de l'UE, dans leur version
              modifi&eacute;e.  
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <ul>
            <li>
              <strong>
                {" "}
                Profilage <br /> <br />{" "}
              </strong>
                Si nous devons utiliser un processus d&eacute;cisionnel
              enti&egrave;rement automatis&eacute; quant aux personnes afin de
              fournir des services rapides et efficaces, et si la loi
              l&rsquo;exige, nous vous en informerons au pr&eacute;alable.
            </li>
          </ul>
          <p>
             Vous &ecirc;tes en droit d&rsquo;exiger qu&rsquo;une personne
            examine le r&eacute;sultat de cette d&eacute;cision automatique.
          </p>
          <p>
             Nous traitons vos donn&eacute;es personnelles de mani&egrave;re
            automatique en partie afin d&rsquo;&eacute;valuer certains aspects
            personnels (profilage).
          </p>
          <p>&nbsp;</p>
          <p>C&rsquo;est le cas dans les situations suivantes&nbsp;:</p>
          <p>&nbsp;</p>
          <ul>
            <li>
              Pour lutter contre le blanchiment de capitaux, le financement du
              terrorisme et d&rsquo;autres actes criminels qui mettent en danger
              les actifs financiers.  A cet &eacute;gard, les donn&eacute;es
              personnelles (c.-&agrave;-d. relatives aux transactions de
              paiement) sont analys&eacute;es afin de s&eacute;curiser les
              d&eacute;p&ocirc;ts de nos clients.
            </li>
          </ul>
          <p>&nbsp;</p>
          <ul>
            <li>
              Eu &eacute;gard au marketing cibl&eacute;, nous nous
              effor&ccedil;ons de vous proposer uniquement des offres
              susceptibles de vous int&eacute;resser et de r&eacute;pondre
              &agrave; vos besoins.  
            </li>
            <li>
              Droit de r&eacute;vocation aff&eacute;rent &agrave; un dossier
              Vous &ecirc;tes en droit de r&eacute;voquer le traitement de vos
              donn&eacute;es personnelles, lequel est effectu&eacute;
              conform&eacute;ment aux articles&nbsp;6.1&nbsp;e) et f) du RGPD,
              &agrave; tout moment, y compris le profilage selon
              l&rsquo;article&nbsp;4.4 du RGPD.  En cas de r&eacute;vocation,
              vos donn&eacute;es personnelles ne seront plus trait&eacute;es,
              sauf si nous avons des raisons l&eacute;gitimes de poursuivre le
              traitement, au-del&agrave; de vos int&eacute;r&ecirc;ts, droits et
              libert&eacute;s, ou si le traitement est n&eacute;cessaire
              &agrave; l&rsquo;application, l&rsquo;exercice ou la
              d&eacute;fense de demandes l&eacute;gales.  Le traitement de vos
              donn&eacute;es personnelles demeure licite jusqu&rsquo;&agrave; la
              date de votre r&eacute;vocation. 
            </li>
            <li>
              Droit de r&eacute;vocation aff&eacute;rent au traitement des
              donn&eacute;es &agrave; des fins de marketing.    
              <br /> Le traitement de vos donn&eacute;es personnelles demeure
              licite jusqu&rsquo;&agrave; la date de votre r&eacute;vocation.
               Vous pouvez exercer vos droits de r&eacute;vocation par simple
              courrier &agrave; cet effet &agrave; l&rsquo;adresse suivante
              (aucun formulaire &agrave; remplir)&nbsp;: 30 Avenue De
              S&eacute;gur 75007 Paris, France&nbsp;; ou par e-mail &agrave;
              l&rsquo;adresse&nbsp;:{" "}
              <a href="mailto:contact@klark.app">contact@klark.app</a>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <ul>
            <li>
              <strong>
                {" "}
                Autres droits <br /> <br />{" "}
              </strong>
            </li>
          </ul>
          <p>
             Vos disposez des droits suivants &agrave; l&rsquo;&eacute;gard de
            vos donn&eacute;es personnelles en vertu des articles
            suivants&nbsp;: droit d&rsquo;acc&egrave;s selon
            l&rsquo;article&nbsp;15&nbsp;; droit de rectification selon
            l&rsquo;article&nbsp;16&nbsp;; droit &agrave; l&rsquo;effacement
            selon l&rsquo;article&nbsp;17&nbsp;; droit &agrave; la limitation du
            traitement selon l&rsquo;article&nbsp;18&nbsp;; droit
            d&rsquo;opposition selon l&rsquo;article&nbsp;21&nbsp;; droit
            &agrave; la portabilit&eacute; selon l&rsquo;article&nbsp;20.
          </p>
          <p>&nbsp;</p>
          <p> </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <strong>
              VII. Destruction et p&eacute;riodes de r&eacute;tention <br />{" "}
              <br />{" "}
            </strong>
          </p>
          <p>
            <strong> </strong>Nous stockons et traitons vos donn&eacute;es
            personnelles aussi longtemps que n&eacute;cessaire pour remplir nos
            obligations en vertu de l&rsquo;accord que nous avons conclu avec
            vous ou que la loi l&rsquo;exige. En ce sens, si elles ne sont plus
            n&eacute;cessaires en vertu d&rsquo;obligations l&eacute;gales ou
            contractuelles, vos donn&eacute;es seront d&eacute;truites. Cette
            r&egrave;gle ne s&rsquo;applique pas si leur traitement
            limit&eacute; est n&eacute;cessaire, notamment aux fins
            suivantes&nbsp;:
          </p>
          <p>&nbsp;</p>
          <p>
            P&eacute;riodes de r&eacute;tention commerciales et fiscales
            relatives aux lois suivantes&nbsp;: code du commerce
            fran&ccedil;ais, code fiscal fran&ccedil;ais, code bancaire
            fran&ccedil;ais, loi contre le blanchiment de capitaux et loi sur la
            n&eacute;gociation de titres. <br /> Les p&eacute;riodes de
            r&eacute;tention l&eacute;gale et d&rsquo;obligation de
            documentation varient entre deux et dix ans.
          </p>
          <br />
          <br />
          <br />
          <br />
        </Container>
        <Footer />
      </Layout>
    )
  }
}

export default PrivacyPage

const Title = styled.h1`
  background-color: white;
  padding: 15% 0 20px 0;
  position: relative;
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`
