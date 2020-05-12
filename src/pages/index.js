import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Yulin Huang</h1>
    <p>欢迎到我的主页.</p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
