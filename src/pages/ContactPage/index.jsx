import classes from "./styles.module.css";
import FeedbackForm from "../../components/FeedBackForm";
import ContactInfo from "../../components/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <div className={classes.gokBlok}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 mb-5">
            <div className="p-3">
              <h1>Get in touch today</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                reprehenderit dolorem.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 mb-5"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 mb-5">
            <FeedbackForm />
          </div>
          <div className="col-sm-12 col-lg-4 mb-5">
            <div className="p-3 ps-lg-5">
              <h1>Contact details</h1>
              <div>
                <ContactInfo
                  title="our location"
                  text="Ashgabat, Bitaraplyk Street, 58"
                />
                <ContactInfo title="call us" text="(123) 456-789" />
                <ContactInfo title="email us" text="contact@company.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
