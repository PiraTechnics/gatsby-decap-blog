import * as React from "react"
//import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ location, title, description, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  /*   let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <h4>{description}</h4>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  } */

  return (
    <div>
      <Header />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        {/* <header className="global-header">{header}</header> */}
        <main>{children}</main>
        <footer>
          <div>© {new Date().getFullYear()} Devin Younge</div>
          <a
            style={{ fontSize: ".8em" }}
            href="https://www.flaticon.com/free-icons/quill"
            title="quill icons"
          >
            Quill icons created by Icongeek26 - Flaticon
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
