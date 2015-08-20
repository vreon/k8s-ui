import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import { changeNode } from '../../actions/kubernetes';

@connect(state => ({
    kubernetes: state.kubernetes
}))
class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentDidMount() {
        const { name } = this.props.params;
        this.props.dispatch(changeNode(name));
        this.setState({loading: true});
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params.name !== nextProps.params.name) {
            this.props.dispatch(changeNode(nextProps.params.name));
            this.setState({loading: true});
        } else {
            this.setState({loading: false});
        }
    }

    render(){
        return (
            <div>
                <h2 className="ui header">
                    <i className="server icon"></i>
                    <div className="content">
                        {this.props.params.name}
                        <div className="sub header">Node</div>
                    </div>
                </h2>
                {this.state.loading ? <Loader /> : this.renderNode()}
            </div>
        );
    }

    renderNode(){
        const node = this.props.kubernetes.currentNode;
        return (
            <div>
                <div className="ui segment">
                    <div className="ui top attached label">
                        Capacity
                    </div>
                    <div className="ui three tiny statistics">
                        <div className="ui statistic">
                            <div className="value">
                                {node.status.capacity.cpu}
                            </div>
                            <div className="label">CPU</div>
                        </div>
                        <div className="ui statistic">
                            <div className="value">
                                {node.status.capacity.memory}
                            </div>
                            <div className="label">Memory</div>
                        </div>
                        <div className="ui statistic">
                            <div className="value">
                                {node.status.capacity.pods}
                            </div>
                            <div className="label">Pods</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Node;
