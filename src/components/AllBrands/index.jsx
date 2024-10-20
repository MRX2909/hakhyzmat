import { Col, Container, Row, Image } from "react-bootstrap";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AllBrands = ({ brands }) => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  if (!brands) {
    return <h5 align="center">Garaşyň...</h5>;
  }

  return (
    <div className="mt-5" data-aos="fade-up">
      <h3 align="center" className={classes.title}>
        Our Suppliers
      </h3>
      <Container>
        <Row>
          {brands.map((brand) => (
            <Col className={classes.logoWrapper} key={brand.id}>
              <Image
                src={brand.get_brand_icon}
                className={classes.brandLogo}
                title={brand.brand_name}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllBrands;
