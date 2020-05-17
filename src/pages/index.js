import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <h1>Yulin Huang</h1>
    <p>欢迎到我的主页.</p>

    <h2>Latest Posts</h2>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          body
        }
      }
    }
  }
`
