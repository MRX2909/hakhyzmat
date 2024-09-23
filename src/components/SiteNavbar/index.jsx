import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import brandLogo from "/img/brand.png";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SiteNavbar = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();
  const goToLink = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setServices(response.data);
  };

  useEffect(() => {
    fetchData("/api/services/");
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
            {services.length > 0 && (
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
                  {services.map((service) =>
                    service.subservices.length > 0 ? (
                      <Subdropdown service={service} key={service.id} />
                    ) : (
                      <li key={service.id}>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => goToLink(e, `/service/${service.id}`)}
                        >
                          {service.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>
            )}
            {/* <li className="nav-item">
              <Nav.Link as={Link} to="/info">
                Info
              </Nav.Link>
            </li> */}
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

const Subdropdown = ({ service }) => {
  return (
    <li className="nav-item dropstart">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {service.name}
      </a>
      <ul className="dropdown-menu">
        {service.subservices.map((subservice) => (
          <SubServiceItem key={subservice.id} subservice={subservice} />
        ))}
      </ul>
    </li>
  );
};

const SubServiceItem = ({ subservice }) => {
  const navigate = useNavigate();
  const goToLink = (e, url) => {
    e.preventDefault();
    navigate(url);
  };
  
  if (subservice.subservices.length > 0) {
    return (
      <li className="nav-item dropstart">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {subservice.name}
        </a>
        <ul className="dropdown-menu">
          {subservice.subservices.map((child) => (
            <SubServiceItem key={child.id} subservice={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <a
          className="dropdown-item"
          href="#"
          onClick={(e) => goToLink(e, `/service/${subservice.id}`)}
        >
          {subservice.name}
        </a>
      </li>
    );
  }
};

export default SiteNavbar;
