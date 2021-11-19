export const saveElement = details => {
    return (dispatch) => {
        dispatch({
            type: 'save',
            payload: details,
        })
    }
}

export const deleteElement = details => {
    return (dispatch) => {
        dispatch({
            type: 'delete',
            payload: parseInt(details)
        })
    }
}