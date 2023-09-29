import * as React from "react"
import icon from "../images/Quill.png"

/* const Utils = () => {
  return (
    <div className="justify-start items-center gap-10 flex">
      <div className="h-9 pl-4 pr-2 py-2 bg-zinc-100 rounded justify-start items-center gap-3 flex">
        <div className="grow shrink basis-0 text-zinc-400 text-sm font-normal font-['Inter'] leading-tight">
          Search
        </div>
        <div className="w-4 h-4 relative" />
      </div>
      <div className="w-12 h-7 relative">
        <div className="w-12 h-7 left-0 top-0 absolute bg-gray-200 rounded-full" />
        <div className="w-6 h-6 p-1 left-[2px] top-[2px] absolute bg-white rounded-full shadow justify-start items-start gap-2.5 inline-flex">
          <div className="w-3.5 h-3.5 relative" />
        </div>
      </div>
    </div>
  )
} */

const Brand = () => {
  return (
    <div className="w-64 h-10 justify-center items-end gap-2 flex">
      <img className="w-9 h-10" src={icon} alt="logo" />
      <div className=" h-10 text-sky-500 text-4xl font-normal font-allura leading-normal">
        Bard’s Bookshelf
      </div>
    </div>
  )
}

const PageNav = () => {
  return (
    <div className="justify-start items-center gap-5 flex">
      <div className="h-10 justify-center items-end gap-5 flex">
        <a
          href="/"
          className="text-sky-500 text-base font-normal font-['Work Sans'] leading-normal"
        >
          Home
        </a>
        <a
          href="/"
          className="text-sky-500 text-base font-normal font-['Work Sans'] leading-normal"
        >
          Blog
        </a>
        <a
          href="/"
          className="text-sky-500 text-base font-normal font-['Work Sans'] leading-normal"
        >
          Single Post
        </a>
        <a
          href="/"
          className="text-sky-500 text-base font-normal font-['Work Sans'] leading-normal"
        >
          Pages
        </a>
        <a
          href="/"
          className="text-sky-500 text-base font-normal font-['Work Sans'] leading-normal"
        >
          Contact
        </a>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="ps-6 h-24 py-4 flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="justify-start items-start gap-24 inline-flex">
        <Brand />
        <PageNav />
      </div>
    </div>
  )
}

export default Header