const savedReducer = ( state = [], action) => {
    switch (action.type) {
        case 'save':
            state.push(action.details);
            return state;
        
        case 'delete':
            return { state: state.filter(
                item => item.id !== action.id
            )}

        default:
            return state;
    }
};
 
export default savedReducer;