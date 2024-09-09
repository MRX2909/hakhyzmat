import { InputGroup, Form, Button } from "react-bootstrap";
import classes from "./styles.module.css";

const ContactPage = () => {
  return (
    <>
      <div className={classes.gokBlok}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-4">
            <div className="p-3">
              <h1>Get in touch today</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                reprehenderit dolorem.
              </p>
              <div className="my-3">
                <label htmlFor="username">Your name:</label>
                <Form.Control
                  id="username"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="my-3">
                <label htmlFor="email">Your email:</label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="my-3">
                <label htmlFor="feedback">Your feedback:</label>
                <textarea
                  id="feedback"
                  placeholder="Feedback"
                  className="form-control"
                  style={{ resize: "none" }}
                  rows={6}
                ></textarea>
              </div>
              <div className="text-end">
                <Button className="px-4">Send</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="p-3">
              <h1>Contact details</h1>
              <div>
                <div className={classes}>Our Location</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur, placeat illum? Repudiandae sequi recusandae odio
                  inventore suscipit autem rerum aliquam incidunt non. Dolorem
                  voluptatum consectetur quo consequuntur cum voluptate
                  similique?
                </div>
              </div>
              <p>
                Tenetur, placeat illum? Repudiandae sequi recusandae odio
                inventore suscipit autem rerum aliquam incidunt non. Dolorem
                voluptatum consectetur quo consequuntur cum voluptate similique?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
