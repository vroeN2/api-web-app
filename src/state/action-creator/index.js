export const saveItem = item => {
    return dispatch => {
        dispatch({
            type: 'save',
            id: item
        });
    }
}

export const deleteItem = item => {
    return dispatch => {
        dispatch({
            type: "delete",
            id: item
        });
    }
}