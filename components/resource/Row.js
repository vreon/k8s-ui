import React from 'react';
import Name from './Name';
import ResourceLabelList from '../ResourceLabelList';
import Toggler from '../Toggler';
import { ICONS, COLORS, HUMAN_NAMES } from '../../constants/kinds';
import { DETAILS_COMPONENT } from './details';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render(){
        return (
            <tbody>
                {this.renderSummary()}
                {this.state.expanded ? this.renderDetails() : null}
            </tbody>
        );
    }

    renderSummary(){
        const { kind } = this.props.resource;
        const { labels, name } = this.props.resource.metadata;
        const color = COLORS[kind];
        return (
            <tr>
                <td className="collapsing">
                    <Name name={name} kind={kind} />
                </td>
                <td>
                    {!!labels ? <ResourceLabelList color={color} labels={labels} /> : null}
                </td>
                <td className="collapsing">
                    <Toggler isToggled={this.state.expanded} onClick={this.handleClick.bind(this)} />
                </td>
            </tr>
        );
    }

    renderDetails(){
        const Details = DETAILS_COMPONENT[this.props.resource.kind];
        return (
            <tr className="expanded">
                <td colSpan="3">
                    <Details resource={this.props.resource} />
                </td>
            </tr>
        );
    }

    handleClick(){
        this.setState({expanded: !this.state.expanded});
    }
}
