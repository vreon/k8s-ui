import React from 'react';
import { connect } from 'react-redux';

import { ICONS, COLORS, HUMAN_NAMES } from '../../constants/kinds'

export const CREATABLE_KINDS = [
    "Pod",
    "Namespace",
    "ReplicationController",
    "Service",
    "Secret",
    "Volume",
];

export const DESCRIPTIONS = {
    Namespace: "Namespaces help different projects, teams, or customers to share a Kubernetes cluster.",
    Pod: "A Pod is a tightly-coupled group of Containers with shared Volumes.",
    Service: "A Service is an abstraction which defines a logical set of Pods and a policy by which to access them.",
    ReplicationController: "A Replication Controller ensures that a specified number of Pod \"replicas\" are running at any one time.",
    Secret: "A Secret stores sensitive data (e.g. SSH keys, passwords) separately from the Pods that use them, protecting the sensitive data from proliferation by tools that process Pods.",
    Volume: "A Volume is a directory, possibly with some data in it, which is accessible to a Container.",
};

export default class Create {
    renderKindCard(kind){
        return (
            <div key={kind} className={"ui segment " + COLORS[kind]}>
                <h4 className={"ui header " + COLORS[kind]}>
                    <i className={"icon " + ICONS[kind]}></i>
                    <div className="content">{HUMAN_NAMES[kind]}</div>
                </h4>
                <p>{DESCRIPTIONS[kind]}</p>
            </div>
        );
    }


    render(){
        return (
            <div>
                <h2 className="ui header">
                    <div className="content">
                        Create
                    </div>
                </h2>
                {CREATABLE_KINDS.map(k => this.renderKindCard(k))}
            </div>
        );
    }
}
