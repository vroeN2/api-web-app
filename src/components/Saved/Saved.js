import {    useParams } from "react-router-dom";

const Saved = () => {
    const { id } = useParams();

    return (
        <p>Saved</p>
    );
}
 
export default Saved;