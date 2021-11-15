export const saveElement = details => {
    return (dispatch) => {
        dispatch({
            type: 'save',
            details: details,
            id: details.callingCodes
        })
    }
}

export const deleteElement = id => {
    return (dispatch) => {
        dispatch({
            type: 'delete',
            id: id
        })
    }
}