import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { strapiPost } = data // data.markdownRemark holds your post data
  const { title, body, createdAt } = strapiPost

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>{createdAt}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      body
      created_at(formatString: "MMMM DD, YYYY")
    }
  }
`
