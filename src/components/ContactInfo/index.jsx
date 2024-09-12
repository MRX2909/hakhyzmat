import classes from "./styles.module.css";

const ContactInfo = ({ title, text }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>{title.toUpperCase()}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default ContactInfo;
