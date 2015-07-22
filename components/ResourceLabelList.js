import React from 'react';
import ResourceLabel from './ResourceLabel';

class ResourceLabelList {
    render(){
        let components = [];
        for (let name in this.props.labels) {
            components.push(
                <ResourceLabel
                    color={this.props.color}
                    name={name}
                    value={this.props.labels[name]}
                    key={name}
                />
            );
        }
        return (
            <div>{components}</div>
        );
    }
}

export default ResourceLabelList;
