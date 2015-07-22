import React from 'react';

export default class Toggler {
    render() {
        return (
            <a className="ui basic button icon" onClick={this.props.onClick}>
                <i className={"chevron icon " + (this.props.isToggled ? "up" : "down")}></i>
            </a>
        );
    }
}
