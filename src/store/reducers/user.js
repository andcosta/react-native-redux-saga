
import { 
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    data: {
        userName: 'Anderson Costa',
        userAvatar: 'https://avatars0.githubusercontent.com/u/25548201'
    },
    loading: false,
    error: null,
}

export default user = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case USER_REQUEST:
            return { ...state, loading: true, error: null }
        case USER_REQUEST_SUCCESS:
            return { data: action.payload.user, loading: false, error: null }
        case USER_REQUEST_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        default:
            return state;
    }
}