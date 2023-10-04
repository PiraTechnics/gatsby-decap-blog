import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
      <div>
        <div className="text-xl font-semibold">Latest Posts</div>
        <hr className="mb-3" />
      </div>
      <Content posts={posts} />
    </Layout>
  )
}

export default BlogIndex

const Content = ({ posts }) => {
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center px-3">
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const author = post.frontmatter.author || ""
        const tags = post.frontmatter.tags
        const description = post.frontmatter.description || post.exerpt
        const date = post.frontmatter.date
        const thumbnail = post.frontmatter.featured

        return (
          <div
            key={post.fields.slug}
            className="container max-w-sm min-w-min p-4 bg-white rounded-xl border border-gray-200 gap-4"
          >
            <div className="thumbnail-wrapper flex justify-center">
              {thumbnail ? (
                <GatsbyImage
                  className="rounded-md"
                  fluid={thumbnail.childImageSharp.fluid}
                  image={getImage(thumbnail.childImageSharp)}
                  alt={title}
                />
              ) : (
                <img
                  className="rounded-md"
                  src="https://via.placeholder.com/360x240"
                  alt="placeholder"
                />
              )}
            </div>
            <div className="self-stretch p-2 flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch flex-col gap-2 flex">
                <div className="px-2.5 py-1 rounded-md justify-center items-center gap-4 flex flex-row">
                  {tags &&
                    React.Children.toArray(
                      tags.map(tag => {
                        return (
                          <div className="text-sky-500 text-lg font-medium font-serif  bg-slate-300 bg-opacity-50 rounded-md px-3 hover:underline decoration-sky-500">
                            <a href="/">{tag}</a>
                          </div>
                        )
                      })
                    )}
                </div>
                <Link to={post.fields.slug} itemProp="url">
                  <div className="self-stretch text-gray-900 text-2xl font-semibold font-serif leading-7">
                    {title}
                  </div>
                  <div className=" mb-4 text-gray-900 text-base font-medium italic font-serif leading-normal">
                    {author}
                  </div>
                  <div className="text-gray-900 text-base font-normal font-serif leading-normal">
                    {description}
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
export const Head = () => <Seo title="Home" />

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
          author
          tags
          description
          featured {
            childImageSharp {
              gatsbyImageData(height: 240, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
