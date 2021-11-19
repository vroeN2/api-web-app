import { Col, Image } from "react-bootstrap";
import components from ".";

const CountryCard = ({ country, type, id = 0 }) => {
    const { MyButton } = components;

    return (
        <Col xs={10} sm={5} md={4} lg={3}>
            <div className="card p-2 m-2 text-center" key={country.callingCodes}>
                <Image src={country.flags.svg} fluid />

                <div className="lead my-2">{country.name}</div>

                <MyButton type={type} id={id} details={country}>{type}</MyButton>
            </div>
        </Col>
    );
}
 
export default CountryCard;