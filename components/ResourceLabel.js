import React from 'react';

class ResourceLabel {
    render(){
        return (
            <a className={"ui small label " + this.props.color}>{this.props.name}: {this.props.value}</a>
        );
    }
}

export default ResourceLabel;
