import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import components from "../components";

const Saved = () => {
  const { CountryCard } = components;

  const state = useSelector((state) => state);

  if (state.saved.length > 0) {
    return (
      <Container className="p-0">
        <Row className="align-items-center justify-content-center">
          {state.saved.map((item, index) => (
            <CountryCard country={item.details} type="delete" id={item.id} key={index} />
            // console.log('przekazane id do usuniecia: ', item.id)
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="mt-4 container text-center">
        <h2 className="text">No saved items!</h2>
      </div>
    )
  }
  };

export default Saved;