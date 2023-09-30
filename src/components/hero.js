import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ description }) => {
  console.log(description)

  return (
    <div className="container mx-auto mb-5 relative">
      <StaticImage
        src={"../images/hero.jpg"}
        alt="Stylish modern bookshelf full of old books"
        placeholder="blurred"
        className="rounded-md"
      />
      <div className="rounded-xl backdrop-blur-sm bg-black/30 text-center text-5xl text-slate-200 italic absolute inset-x-10 top-60 py-2">
        {description}
      </div>
      <div className="text-sm text-slate-200 underline decoration-sky-400 absolute bottom-0 left-1">
        Photo by{" "}
        <a
          href="https://unsplash.com/@paulmelki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          rel="noopener"
          target="blank"
        >
          Paul Melki
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/photos/bByhWydZLW0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          rel="noopener"
          target="blank"
        >
          Unsplash
        </a>
      </div>
    </div>
  )
}

export default Hero
