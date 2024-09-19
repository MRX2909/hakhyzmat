import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import brandLogo from "/img/brand.png";
import { Nav } from "react-bootstrap";

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
    <nav className={"navbar navbar-expand-lg bg-light py-3 " + classes.navbar}>
      <div className="container">
        <Nav.Link as={Link} to="/" className="navbar-brand fw-bold">
          <img src={brandLogo} alt="HakHyzmat" />
        </Nav.Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Menýuny aç/ýap"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
            <li className="nav-item">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li></li>
                <li className="nav-item dropstart">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/info">
                Info
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SiteNavbar;
