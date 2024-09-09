import { Col, Container, Row, Image } from "react-bootstrap";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const AllBrands = () => {
  const [brands, setBrands] = useState([]);

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setBrands(response.data);
  };

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/api/brands/");
  }, []);
  return (
    <div className="mt-5">
      <h3 align="center" className={classes.title}>
        Our Suppliers
      </h3>
      <Container>
        <Row>
          {brands.map((brand) => (
            <Col className={classes.logoWrapper} key={brand.id}>
              <Image
                src={brand.get_icon}
                className={classes.brandLogo}
                title={brand.name}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllBrands;
