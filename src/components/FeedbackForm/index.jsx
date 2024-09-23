import { Form, Button, Modal } from "react-bootstrap";
import classes from "./styles.module.css";
import { useRef, useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("Meýdanlary dogry dolduryň!");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhone = useRef(null);
  const inputCompany = useRef(null);
  const inputMessage = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      company_name: inputCompany.current.value,
      phone_number: inputPhone.current.value,
      message: inputMessage.current.value,
    };

    if (
      sendData.name &&
      sendData.email &&
      sendData.company_name &&
      sendData.phone_number &&
      sendData.message
    ) {
      axios
        .post("/api/contact/", sendData)
        .then(function (response) {
          if (response.status === 201) {
            setModalText("Habar ugradyldy!");
          }
        })
        .catch(function (error) {
          setModalText("Meýdanlary dogry tertipde dolduryň!");
          console.error("Serwere birikmekde näsazlyk ýüze çykdy: " + error);
        })
        .finally(function () {
          handleShow();
        });
    } else {
      setModalText("Ähli meýdanlary dolduryň!");
      handleShow();
    }
  };
  return (
    <div className={"p-4 bg-white rounded-4 " + classes.formWrapper}>
      <div className="d-flex justify-content-around flex-row">
        <div className="my-3 mx-2 w-50">
          <label htmlFor="name" className="fw-bold">
            Your name:
          </label>
          <Form.Control
            id="name"
            placeholder="Your name"
            aria-label="Your name"
            aria-describedby="basic-addon1"
            className="rounded-4"
            ref={inputName}
          />
        </div>

        <div className="my-3 mx-2 w-50">
          <label htmlFor="email" className="fw-bold">
            Your email:
          </label>
          <Form.Control
            type="email"
            id="email"
            placeholder="example@mail.com"
            aria-label="email"
            aria-describedby="basic-addon1"
            className="rounded-4"
            ref={inputEmail}
          />
        </div>
      </div>

      <div className="d-flex justify-content-around flex-row">
        <div className="my-3 mx-2 w-50">
          <label htmlFor="phone" className="fw-bold">
            Phone:
          </label>
          <Form.Control
            id="phone"
            placeholder="(123) 456-789"
            aria-label="phone"
            aria-describedby="basic-addon1"
            className="rounded-4"
            ref={inputPhone}
          />
        </div>

        <div className="my-3 mx-2 w-50">
          <label htmlFor="company" className="fw-bold">
            Company:
          </label>
          <Form.Control
            type="text"
            id="company"
            placeholder="Your Company Name"
            aria-label="company"
            aria-describedby="basic-addon1"
            className="rounded-4"
            ref={inputCompany}
          />
        </div>
      </div>

      <div className="d-flex justify-content-around flex-row">
        <div className="my-3 mx-2 w-100">
          <label htmlFor="feedback" className="fw-bold">
            Message:
          </label>
          <textarea
            id="feedback"
            placeholder="Please type your message here..."
            className="form-control rounded-4"
            style={{ resize: "none" }}
            rows={6}
            ref={inputMessage}
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-end flex-row">
        <div className="text-end mx-2 w-100">
          <Button
            className="px-4 rounded-4"
            onClick={() => {
              handleSubmit();
            }}
          >
            Send
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>HakHyzmat</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Ýapmak
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeedbackForm;
