import { Col, Container, Row, Image } from "react-bootstrap";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

const AllBrands = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 600 });
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setBrands(response.data);
      } catch (err) {
        setError("Serwer bilen birikmede näsazlyk ýüze çykdy!");
      } finally {
        setLoading(false);
      }
    };
    fetchData("/api/brands/");
  }, []);

  if (isLoading) {
    return <h5 align="center">Garaşyň...</h5>;
  }

  if (error) {
    return <h5 align="center" className="my-4 text-danger">{error}</h5>;
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
