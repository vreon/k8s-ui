import * as type from '../constants/actionTypes';

const initialState = {
    currentNode: null,
    nodes: [],
    namespaces: [],
    services: [],
    replicationControllers: [],
    pods: [],
};

export default function kubernetes(state=initialState, action) {
    switch (action.type) {
    case type.FETCH_NODES:
        return {
            ...state,
            nodes: action.nodes,
        };
    case type.FETCH_NAMESPACES:
        return {
            ...state,
            namespaces: action.namespaces,
        };
    case type.FETCH_NAMESPACE_PODS:
        return {
            ...state,
            pods: action.pods,
        }
    case type.FETCH_NAMESPACE_SERVICES:
        return {
            ...state,
            services: action.services,
        }
    case type.FETCH_NAMESPACE_REPLICATIONCONTROLLERS:
        return {
            ...state,
            replicationControllers: action.replicationControllers,
        }
    case type.FETCH_NODE:
        return {
            ...state,
            currentNode: action.node,
        }
    default:
        return state;
    }
}
