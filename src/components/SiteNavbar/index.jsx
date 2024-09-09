import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const SiteNavbar = () => {
  const [services, setServices] = useState([]);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setServices(response.data);
  };

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/api/services/");
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className={classes.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          HakHyzmat
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto w-100 justify-content-end">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              {services.map((service) => {
                if (service.service === null) {
                  return (
                    <NavDropdown.Item
                      href={`/service/${service.id}`}
                      key={service.id}
                    >
                      {service.name}
                    </NavDropdown.Item>
                  );
                } else {
                  return (
                    <NavDropdown.Item
                      href={`/service/${service.id}`}
                      key={service.id}
                    >
                      {"Child -> " + service.name}
                    </NavDropdown.Item>
                  );
                }
              })}
            </NavDropdown>
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Submenu 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Submenu 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Submenu 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/info">
              Info
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
