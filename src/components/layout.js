import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, description, children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`
  //const isRootPath = location.pathname === rootPath
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
      <div className="lg:container lg:mx-auto">
        <Header />
        {/* <div className="global-wrapper" data-is-root-path={isRootPath}> */}
        {/* <header className="global-header">{header}</header> */}

        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
