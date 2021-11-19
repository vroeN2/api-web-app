import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';
import { Button } from 'react-bootstrap';

const MyButton = ({ type, details, id }) => {
    const dispatch = useDispatch();

    const { saveElement, deleteElement } = bindActionCreators(actionCreators, dispatch);

    if (type === 'save') {
        return (
            <Button variant='outline-primary' onClick={() => saveElement(details)}>{type}</Button>
        )
    }
    if (type === 'delete') {
        return (
            <Button variant='outline-primary' onClick={() => deleteElement(id)}>{type}</Button>
        )
    }
}
 
export default MyButton;