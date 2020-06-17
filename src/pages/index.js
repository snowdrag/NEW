import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section>
      <h3>Latest News</h3>

      <ul>
        {data.news.edges.map(({ node: { id, time, title, venue } }) => (
          <li key={id}>
            <time>{time}</time>

            <h4>
              {title} at <span>{venue.name}</span>
            </h4>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <h3>Latest Posts</h3>
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
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    news: allStrapiPersonalNews(sort: { order: DESC, fields: [time] }) {
      edges {
        node {
          title
          time(formatString: "LL")
          venue {
            name
          }
        }
      }
    }

    allStrapiPost(
      filter: { isDraft: { eq: false } }
      sort: { order: DESC, fields: [createdAt] }
      limit: 3000
    ) {
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
