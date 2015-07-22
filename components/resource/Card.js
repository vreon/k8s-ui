import React from 'react';
import Name from './Name';
import ResourceLabelList from '../ResourceLabelList';
import Toggler from '../Toggler';
import { COLORS } from '../../constants/kinds';
import { DETAILS_COMPONENT } from './details';

export default class ResourceCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render(){
        const color = COLORS[this.props.resource.kind];
        return (
            <div className={"ui segment " + color}>
                {this.renderSummary()}
                {this.state.expanded ? this.renderDetails() : null}
            </div>
        );
    }

    renderSummary(){
        const { kind } = this.props.resource;
        const { labels, name } = this.props.resource.metadata;
        const color = COLORS[kind];
        return (
            <div>
                <div className="ui secondary menu">
                    <div className="fitted item">
                        <Name name={name} kind={kind} />
                    </div>
                    <div className="right menu">
                        <div className="item fitted">
                            <Toggler isToggled={this.state.expanded} onClick={this.handleClick.bind(this)} />
                        </div>
                    </div>
                </div>
                {!!labels ? <ResourceLabelList color={color} labels={labels} /> : null}
            </div>
        );
    }

    renderDetails(){
        const Details = DETAILS_COMPONENT[this.props.resource.kind];
        return (
            <div>
                <p></p>
                <Details resource={this.props.resource} />
            </div>
        );
    }

    handleClick(){
        this.setState({expanded: !this.state.expanded});
    }
}
