import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"

export default function Template({ data }) {
  const { strapiPost } = data // data.markdownRemark holds your post data
  const { title, body, createdAt } = strapiPost

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{title}</h1>
          <h2>{createdAt}</h2>

          <ReactMarkdown source={body} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      body
      createdAt(formatString: "MMMM DD, YYYY")
    }
  }
`
