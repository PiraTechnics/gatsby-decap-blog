import * as React from "react"
import Brand from "./brand"

const Footer = () => {
  return (
    <footer className="container my-9">
      <hr className="py-3" />
      <div className="flex justify-center mb-5">
        <div className="text-center">
          <Brand />
          <div className="pt-3 pb-1">
            © Devin Younge {new Date().getFullYear()}
          </div>
          <a
            style={{ fontSize: ".7em" }}
            href="https://www.flaticon.com/free-icons/quill"
            title="quill icons"
          >
            Quill icon by Icongeek26
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
