import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About: Yulin Huang" />
    <h1>About</h1>

    <ReactMarkdown source={data.strapiAbout.body} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    strapiAbout {
      body
    }
  }
`
