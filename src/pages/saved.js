import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import components from "../components";

const Saved = () => {
    const { CountryCard } = components;

  const state = useSelector((state) => state);

  return (
    <Container className="p-0">
      <Row className="align-items-center justify-content-center">
        {state.saved.map((item) => (
          <CountryCard country={item} type='delete' />
        ))}
      </Row>
    </Container>
  );
};

export default Saved;
