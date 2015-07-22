import React from 'react';
import { connect } from 'redux/react';
import { Link } from 'react-router';

import List from '../resource/List';
import { changeNamespace } from '../../actions/kubernetes';
import * as layouts from '../../constants/layouts';

const LAYOUT_NAMES = {
    table: layouts.LAYOUT_TABLE,
    cards: layouts.LAYOUT_CARDS,
};

const DEFAULT_LAYOUT = layouts.LAYOUT_CARDS;

@connect(state => ({
    kubernetes: state.kubernetes
}))
class Namespace {
    componentDidMount() {
        const { name } = this.props.params;
        this.props.dispatch(changeNamespace(name));
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params.name !== nextProps.params.name) {
            this.props.dispatch(changeNamespace(nextProps.params.name));
        }
    }

    render(){
        const { kubernetes } = this.props;
        const query = this.props.location.query || {};
        const layout = LAYOUT_NAMES[query.layout] || DEFAULT_LAYOUT;

        // TODO: This should be sortable and filterable and stuff
        let resources = [
            ...kubernetes.services,
            ...kubernetes.replicationControllers,
            ...kubernetes.pods,
        ];
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="left floated six wide column">
                        <h2 className="ui header">
                            <i className="sitemap icon"></i>
                            <div className="content">
                                {this.props.params.name}
                                <div className="sub header">Namespace</div>
                            </div>
                        </h2>
                    </div>
                    <div className="right floated right aligned six wide column">
                        <div className="ui icon basic buttons">
                            <Link
                                to={this.props.location.pathname}
                                query={{layout: 'cards'}}
                                className="ui button"
                            >
                                <i className="list layout icon"></i>
                            </Link>
                            <Link
                                to={this.props.location.pathname}
                                query={{layout: 'table'}}
                                className="ui button"
                            >
                                <i className="table icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="sixteen wide column">
                        <List resources={resources} layout={layout} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Namespace;
