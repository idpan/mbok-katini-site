import React from "react";
import { Link } from "gatsby";
import logotype from "../assets/images/mbok-katini-logotype.png";
import { HamburgerMenu } from "../utility/init";
import Contact from "../component/Contact";
import * as style from "../style/component/navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

{
  /* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */
}
export default function NavbarMain() {
  return (
    <Navbar className={style.navbar} fixed="top" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          <img height="32" src={logotype} alt="logotype" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <HamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse className={style.navbar_nav} id="basic-navbar-nav">
          <Nav className="text-center pt-4 gap-4 pb-5 align-items-center py-md-0 ms-auto">
            <Link
              className={style.nav_link + " " + "my-nav-link "}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className={style.nav_link + " " + " my-nav-link "} to="/menu">
              Menu
            </Link>
            <Link className={style.nav_link + " " + "my-nav-link "} to="/bento">
              Bento
            </Link>
            <Link
              className={style.nav_link + " " + "my-nav-link "}
              to="/tumpeng"
            >
              Tumpeng
            </Link>
            <div className="d-md-none w-100 ">
              <Contact />
            </div>
            <NavDropdown
              align="end"
              className={style.nav_dropdown + " " + "d-none d-md-block pt-0 "}
              title="Kontak"
              id="basic-nav-dropdown"
            >
              {" "}
              <div className=" pb-5 pt-3 bg-dark  ">
                <Contact />
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <nav
//   className={
//     style.navbar +
//     " " +
//     "my-container dark-color navbar navbar-expand-md fixed-top justify-content-between "
//   }
// >

//   <button
//     className="btn navbar-toggler  "
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navbarNav"
//     aria-controls="navbarNavAltMarkup"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//   </button>
//   <div
//     className={
//       style.navbar_nav +
//       " " +
//       "justify-content-end  navbar-collapse collapse"
//     }
//     id="navbarNav"
//   >
//     <div className="pt-5 pb-5  navbar-nav gap-5 align-items-center">
//       <Link
//         className={style.nav_link + " " + "my-nav-link "}
//         aria-current="page"
//         to="/"
//       >
//         Home
//       </Link>
//       <Link className={style.nav_link + " " + " my-nav-link "} to="/menu">
//         Menu
//       </Link>
//       <Link className={style.nav_link + " " + "my-nav-link "} to="/paket">
//         Paket
//       </Link>
//       <div className="d-md-none w-100">
//         <Contact />
//       </div>
//       <div className="dropdown d-none d-md-block  ">
//         <div
//           className={style.nav_link + " dropdown-toggle  "}
//           data-bs-toggle="dropdown"
//           to="#"
//           id="navbarDarkDropdownMenuLink"
//           role="button"
//           aria-expanded="false"
//         >
//           <span className="my-nav-link">Kontak</span>
//         </div>
//         <div
//           className="dropdown-menu pb-5 pt-3  dropdown-menu-end bg-dark mt-5  "
//           aria-labelledby="navbarDarkDropdownMenuLink"
//         >
//           <Contact />
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
