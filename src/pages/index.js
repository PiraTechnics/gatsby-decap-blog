import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout
        location={location}
        title={siteTitle}
        description={siteDescription}
      >
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <Hero description={siteDescription} />
      <div className="text-xl font-semibold ">Latest Posts</div>
      <hr className="mb-3" />
      <Content posts={posts} />
      <footer className="my-5">
        <hr className="py-2" />
      </footer>
    </Layout>
  )
}

export default BlogIndex

const Content = ({ posts }) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center px-3">
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const description = post.frontmatter.description || post.exerpt
        const date = post.frontmatter.date

        return (
          <div
            key={post.fields.slug}
            className="container max-w-sm min-w-min p-4 bg-white rounded-xl border border-gray-200 gap-4"
          >
            <img
              className="rounded-md"
              src="https://via.placeholder.com/360x240"
              alt="placeholder"
            />
            <div className="self-stretch p-2 flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="px-2.5 py-1 bg-indigo-500 bg-opacity-5 rounded-md justify-center items-center gap-1 inline-flex">
                  <div className="text-sky-500 text-sm font-medium font-['Work Sans'] leading-tight">
                    [Genre Placeholder]
                  </div>
                </div>
                <Link to={post.fields.slug} itemProp="url">
                  <div className="self-stretch text-gray-900 text-2xl font-semibold font-['Work Sans'] leading-7">
                    {title}
                    <div className="text-gray-900 text-base font-normal font-['Work Sans'] leading-normal">
                      {description}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="justify-start items-center gap-5 inline-flex">
                <div className="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
                  {date}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
