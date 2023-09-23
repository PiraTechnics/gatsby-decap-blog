import * as React from "react"
import Container from "react-bootstrap/Container"
import { Image, Navbar, Col } from "react-bootstrap"
import "@fontsource/metamorphous"
import icon from "../images/icon.png"

const headerPrimary = "#A767F1"
const headerSecondary = "#FF8080"

const Header = () => {
  return (
    <Navbar className="bg-body-secondary">
      <Container fluid>
        <Col>
          <Navbar.Brand href="/" className="text-center fs-2 fw-semibold">
            <Image fluid src={icon} className="header-icon" />
            <span
              className="align-bottom px-2"
              style={{
                fontFamily: "Metamorphous",
                background: `linear-gradient(to right, ${headerPrimary}, ${headerSecondary})`,
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Bard's Bookshelf
            </span>
          </Navbar.Brand>
        </Col>
      </Container>
    </Navbar>
  )
}

export default Header
