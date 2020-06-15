import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <h3>Latest Posts from me</h3>
    <ul>
      {data.allStrapiPost.edges.map(edge => (
        <li key={edge.node.id}>
          <h4>
            <Link to={`/post/${edge.node.slug || edge.node.id}`}>
              {edge.node.title}
            </Link>
          </h4>
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
          slug
          body
        }
      }
    }
  }
`
