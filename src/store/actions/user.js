import { 
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILURE
} from './types';


export const userRequest = () => ({
    type: USER_REQUEST
});

export const userRequestSuccess = user => ({
    type: USER_REQUEST_SUCCESS,
    payload: { user },
});

export const userRequestFailure = error => ({
    type: USER_REQUEST_FAILURE,
    payload: { error },
});
