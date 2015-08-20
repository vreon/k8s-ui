import 'whatwg-fetch'
import * as type from '../constants/actionTypes';

const KUBERNETES_URL = 'http://localhost:8080/api/v1';

function setKind(kind, resources){
    return resources.map(r => ({...r, kind}));
}

export function fetchNamespaces() {
    return dispatch => {
        fetch(`${KUBERNETES_URL}/namespaces`)
        .then(res => res.json())
        .then(res => dispatch({
            type: type.FETCH_NAMESPACES,
            namespaces: res.items
        }));
    };
}

export function fetchNodes() {
    return dispatch => {
        fetch(`${KUBERNETES_URL}/nodes`)
        .then(res => res.json())
        .then(res => dispatch({
            type: type.FETCH_NODES,
            nodes: res.items
        }));
    };
}

export function changeNamespace(name) {
    return dispatch => {
        fetch(`${KUBERNETES_URL}/namespaces/${name}/services`)
        .then(res => res.json())
        .then(res => dispatch({
            type: type.FETCH_NAMESPACE_SERVICES,
            services: setKind('Service', res.items),
            namespaceName: name
        }));

        fetch(`${KUBERNETES_URL}/namespaces/${name}/pods`)
        .then(res => res.json())
        .then(res => dispatch({
            type: type.FETCH_NAMESPACE_PODS,
            pods: setKind('Pod', res.items),
            namespaceName: name
        }));

        fetch(`${KUBERNETES_URL}/namespaces/${name}/replicationcontrollers`)
        .then(res => res.json())
        .then(res => dispatch({
            type: type.FETCH_NAMESPACE_REPLICATIONCONTROLLERS,
            replicationControllers: setKind('ReplicationController', res.items),
            namespaceName: name
        }));
    };
}

export function changeNode(name) {
    return dispatch => {
        fetch(`${KUBERNETES_URL}/nodes/${name}`)
        .then(res => res.json())
        .then(res => dispatch({
            type: type.FETCH_NODE,
            node: res
        }));
    };
}
