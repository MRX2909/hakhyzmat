import { useNavigate, useParams } from "react-router-dom";
import classes from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ServicePage = () => {
  const { serviceId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        response.data.length > 0 && setData(response.data[0]);
      } catch (err) {
        setError(`Serwer bilen birikmede näsazlyk ýüze çykdy: ${err}`);
      } finally {
        setLoading("loaded");
      }
    };
    fetchData(`/api/services/${serviceId}/`);
    return () => {
      setData(null);
      setLoading(true);
    };
  }, [serviceId]);

  if (isLoading === "loaded" && data === null) {
    return (
      <h3 align="center" className="m-3 text-danger">
        Beýle sahypa tapylmady!
      </h3>
    );
  } else if (isLoading === true) {
    <h3 align="center" className="m-3">
      Garaşyň...
    </h3>;
  } else {
    return (
      <>
        <div
          className={
            classes.section +
            " " +
            classes.gok +
            " row m-0 d-flex flex-row align-items-center"
          }
        >
          <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-content-center">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
          <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-content-center">
            <img
              src={data.get_image}
              alt={data.name}
              className={"rounded " + classes.serviceImg}
            />
          </div>
        </div>
      </>
    );
  }
};

export default ServicePage;
