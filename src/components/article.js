import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Article = ({ post }) => {
  const featuredImage = post.frontmatter.featured

  return (
    <article
      className="blog-post border-2 rounded-xl p-6 mb-8 lg:max-w-screen-lg"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        <p className="text-sm">{post.frontmatter.author}</p>
        <p className="text-sm">{post.frontmatter.date}</p>
      </header>
      {featuredImage && (
        <section className="flex justify-center mb-10">
          <GatsbyImage
            fluid={featuredImage.childImageSharp.fluid}
            image={getImage(featuredImage.childImageSharp)}
            alt={post.frontmatter.title}
          />
        </section>
      )}
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />
    </article>
  )
}

export default Article
