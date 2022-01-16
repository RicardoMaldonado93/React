import { types } from "../types/types";

export const setErrorAction = (err)=>{
    return( dispatch => dispatch(setError(err)));
};

export const removeErrorAction = ()=>{
    return( dispatch => dispatch(removeError()));
};

export const startLoadingAction = ()=>{
    return( dispatch => dispatch(startLoading()) )
}
export const finishLoadingAction = ()=>{
    return( dispatch => dispatch(finishLoading()) )
}

export const setError = ( err )=>({
    type: types.uiSetError,
    payload:{
        msgError: err
    }
});

export const removeError = ( err )=>({
    type: types.uiRemoveError,
});

export const startLoading = ()=>({
    type: types.uiStartLoading
})

export const finishLoading = ()=>({
    type: types.uiFinishLoading
})
