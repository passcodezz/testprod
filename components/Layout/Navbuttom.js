import logo from "/public/images/logo-new.png";
import logophop from "/public/images/phoplogo5.png";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useRef, useEffect } from "react";
import classes from "/styles/navber.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbuttom() {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.9,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          <Navbar bg="white" expand="lg">
            <Container>
              <Link href="/" passHref>
                <Navbar.Brand>
                  <Image
                    alt="logo"
                    src={logophop}
                    width="50"
                    height="60"
                    // objectFit=""
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link href="/" passHref>
                    <Nav.Link className="text-dark">Homepage</Nav.Link>
                  </Link>

                  <Link href="/about-us.html" passHref>
                    <Nav.Link className="text-dark">About</Nav.Link>
                  </Link>

                  <NavDropdown
                    title="Product & Service"
                    id="basic-nav-dropdown"
                  >
                    <Link href="/products1" passHref>
                      <NavDropdown.Item>Conveyor</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products2" passHref>
                      <NavDropdown.Item>
                        Industrial Shelf (HeavyRack)
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products3" passHref>
                      <NavDropdown.Item>
                        Program Design (Program Control)
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products4" passHref>
                      <NavDropdown.Item>Steam Boiler</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products5" passHref>
                      <NavDropdown.Item>
                        Water Cooler (Chiller)
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products6" passHref>
                      <NavDropdown.Item>Machine</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products7" passHref>
                      <NavDropdown.Item>
                        Canvas Tent Tunnel Disinfect Covid-19
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products8" passHref>
                      <NavDropdown.Item>
                        COVID-19 Disinfection Tunnel series2
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/products9" passHref>
                      <NavDropdown.Item>AGV/AMRs</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                  <Link href="/reference" passHref>
                    <Nav.Link className="text-dark">Reference</Nav.Link>
                  </Link>
                  <Link href="/contact-us.html" passHref>
                    <Nav.Link className="text-dark">Contact</Nav.Link>
                  </Link>
                  <Link href="/sitemaps" passHref>
                    <Nav.Link className="text-dark">Sitemaps</Nav.Link>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </motion.div>
      </header>
    </>
  );
}

export default Navbuttom;
