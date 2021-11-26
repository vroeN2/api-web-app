import { useState } from "react";
import { Alert } from "react-bootstrap";
import components from "../components";

const Error = () => {
  const [show, setShow] = useState(true);
  const { Countries } = components;

  return show ? (
    <Alert variant="danger" onClose={() => setShow(false)}>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>ERROR 404 - PAGE NOT FOUND</p>
    </Alert>
  ) : (
    <Countries />
  );
};

export default Error;
