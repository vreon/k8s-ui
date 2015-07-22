import { SET_CURRENT_NAMESPACE } from '../constants/actionTypes';

const initialState = {
    currentNamespaceName: null,
}

export default function app(state=initialState, action) {
    switch (action.type) {
    case SET_CURRENT_NAMESPACE:
        return {
            ...state,
            currentNamespaceName: action.namespaceName
        };
    default:
        return state;
    }
}
