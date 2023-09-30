import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import heroImg from "../images/hero.jpg"

const Hero = ({ description }) => {
  console.log(description)

  return (
    <section className="bg-cover bg-no-repeat bg-[url('../images/hero.jpg')] bg-gray-600 bg-blend-multiply sm:mx-4 md:mx-8 lg:mx-16 mb-8">
      <div className="px-4 mx-auto text-center py-24 lg:py-36 relative">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight leading-none text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {description}
        </h1>
        <div className="text-sm text-slate-200 underline decoration-sky-400 absolute bottom-1">
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
    </section>
  )
}

export default Hero
