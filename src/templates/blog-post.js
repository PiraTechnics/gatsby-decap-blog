import * as React from "react"
import { Link, graphql } from "gatsby"
import { Button } from "flowbite-react"

import Article from "../components/article"
//import Sidebar from "../components/sidebar"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Article post={post} />
      {/* <Sidebar /> */}
      <Bio />
      <nav className="blog-post-nav pt-4 flex justify-between">
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            <Button size={"sm"} pill outline gradientDuoTone="cyanToBlue">
              <svg
                className="w-6 h-6 text-black dark:text-white inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                />
              </svg>
              <div className="text-base px-2">
                {previous.frontmatter.title.length < 20
                  ? previous.frontmatter.title
                  : previous.frontmatter.title.slice(0, 18) + "..."}
              </div>
            </Button>
          </Link>
        )}
        {next && (
          <Link to={next.fields.slug} rel="next">
            <Button size={"sm"} pill outline gradientDuoTone="cyanToBlue">
              <div className="text-base px-2">
                {next.frontmatter.title.length < 20
                  ? next.frontmatter.title
                  : next.frontmatter.title.slice(0, 18) + "..."}
              </div>
              <svg
                className="w-4 h-4 text-black dark:text-white inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </Button>
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        description
        featured {
          childImageSharp {
            gatsbyImageData(height: 400, placeholder: BLURRED)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
