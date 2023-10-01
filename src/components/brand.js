import * as React from "react"
import icon from "../images/icon.png"

const Brand = () => {
  return (
    <div className="w-64 h-10 justify-center items-end gap-2 flex">
      <img className="w-9 h-10" src={icon} alt="logo" />
      <div className="h-10 text-sky-500 text-4xl font-normal font-allura leading-normal">
        Bard's Bookshelf
      </div>
    </div>
  )
}

export default Brand
