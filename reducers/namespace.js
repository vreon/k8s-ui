import { FETCH_PODS } from '../constants/actionTypes';

const initialState = {
    pods: [],
};

export default function namespace(state=initialState, action) {
    switch (action.type) {
    case FETCH_PODS:
        return {
            ...state,
            pods: action.pods,
        };
    default:
        return state;
    }
}
