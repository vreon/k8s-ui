import React from 'react';
import { connect } from 'redux/react';
import { Link } from 'react-router';

import * as k8s from '../actions/kubernetes';

@connect(state => ({
    kubernetes: state.kubernetes
}))
class Navigation {
    componentDidMount() {
        this.props.dispatch(k8s.fetchNodes());
        this.props.dispatch(k8s.fetchNamespaces());
    }

    render() {
        const {kubernetes, dispatch} = this.props;
        return (
            <div className="ui fluid vertical menu">
                <Link to="/" className="header item">
                    <i className="bar chart icon"></i>
                    Dashboard
                </Link>
                <div className="item">
                    <i className="server icon"></i>
                    <div className="header">Nodes</div>
                    <div className="menu">
                        {kubernetes.nodes.map(node =>
                            <Link
                                to={`/nodes/${node.metadata.name}`}
                                key={node.metadata.name}
                                className="item"
                                activeClassName="active"
                            >{node.metadata.name}</Link>
                        )}
                    </div>
                </div>
                <div className="item">
                    <i className="sitemap icon"></i>
                    <div className="header">Namespaces</div>
                    <div className="menu">
                        {kubernetes.namespaces.map(ns =>
                            <Link
                                to={`/namespaces/${ns.metadata.name}`}
                                key={ns.metadata.name}
                                className="item"
                                activeClassName="active"
                            >{ns.metadata.name}</Link>
                        )}
                    </div>
                </div>
                <div className="item">
                    <Link
                        to="/create"
                        className="ui fluid green button"
                    >
                        <i className="plus icon"></i>
                        Create
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navigation;
