import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <>
      <Layout pageClass="home">
        <h1>this is home page</h1>
        <div className="banner-area">
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Yochen | 🕺🏾會搖擺的工程師👨🏻‍💻</title>
