import * as React from "react"
import Container from "react-bootstrap/Container"
import { Image, Navbar, Col } from "react-bootstrap"
import "@fontsource/metamorphous"
import icon from "../images/icon.png"

const headerPrimary = "#2D4B73"
const headerSecondary = "#0D0D0D"

const Header = () => {
  return (
    <Navbar style={{ background: "var(--bg-color-dark)" }}>
      <Container fluid className="text-center">
        <Col>
          <Navbar.Brand href="/" className="text-center fs-2 fw-semibold">
            <Image fluid src={icon} className="header-icon" />
            <span
              className="align-bottom px-2"
              style={{
                fontFamily: "Metamorphous",
                color: headerPrimary,
                /*                 background: `linear-gradient(to right, ${headerPrimary}, ${headerSecondary})`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text", */
              }}
            >
              Bard's Bookshelf
            </span>
          </Navbar.Brand>
          <div style={{ fontFamily: "Metamorphous", fontSize: ".9em" }}>
            A Blog of Verse and Versatility, Literary Reviews & Recitals
          </div>
        </Col>
      </Container>
    </Navbar>
  )
}

export default Header
