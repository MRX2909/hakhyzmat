import { Col, Container, Row, Image } from "react-bootstrap";
import classes from "./styles.module.css";
import img from "../../brands/1.png";

const AllBrands = () => {
  return (
    <div className="mt-5">
      <h3 align="center" className={classes.title}>
        Our Suppliers
      </h3>
      <Container>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((el) => (
            <Col className={classes.logoWrapper} key={el}>
              <Image src={img} className={classes.brandLogo} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllBrands;
