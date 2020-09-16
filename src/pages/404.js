import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <center>
      <SEO title="404 - Not found" />
      <h1 style={{ paddingTop: "40vh" }}>Page introuvable</h1>
      <p>
        Vous venez de prendre un chemin qui n'existe pas... quelle tristesse.
      </p>
      <h3
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translate(-50%, 0)",
          fontSize: "20px",
          opacity: "0.3",
        }}
      >
        <a href="/" style={{ color: "black" }}>
          Klark
        </a>
      </h3>
    </center>
  </Layout>
)

export default NotFoundPage
