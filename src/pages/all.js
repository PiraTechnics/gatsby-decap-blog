import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
import Seo from "../components/seo"

const AllPosts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const nodes = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} siteTitle={siteTitle}>
      {React.Children.toArray(
        nodes.map(post => {
          return <Article post={post}></Article>
        })
      )}
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All Posts" />

export default AllPosts

export const pageQuery = graphql`
  query AllBlogPost {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          tags
          author
          date(formatString: "MMMM DD, YYYY")
          description
          featured {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
