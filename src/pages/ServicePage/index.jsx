import { useParams } from "react-router-dom";
import classes from "./styles.module.css";

const ServicePage = () => {
  const { serviceId } = useParams();
  
  return (
    <>
      <div className={classes.section + " " + classes.gok}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          repellendus dicta architecto libero corporis velit? Velit accusantium
          maiores quisquam explicabo necessitatibus quas natus dicta itaque est
          in! Ut, fugit minus.
        </p>
      </div>
      <div className={classes.section + " " + classes.ak}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          repellendus dicta architecto libero corporis velit? Velit accusantium
          maiores quisquam explicabo necessitatibus quas natus dicta itaque est
          in! Ut, fugit minus.
        </p>
      </div>
      <div className={classes.section + " " + classes.gok}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          repellendus dicta architecto libero corporis velit? Velit accusantium
          maiores quisquam explicabo necessitatibus quas natus dicta itaque est
          in! Ut, fugit minus.
        </p>
      </div>
    </>
  );
};

export default ServicePage;
