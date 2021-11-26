const savedReducer = ( state = [], action) => {
    switch (action.type) {
        case 'save':
            const newItem = {
                id: parseInt(action.payload.area),
                details: action.payload
            };
            return state = [ ...state, newItem];

        case 'delete':
            return state.filter( item => item.id !== action.payload);

        default:
            return state;
    }
};
 
export default savedReducer;