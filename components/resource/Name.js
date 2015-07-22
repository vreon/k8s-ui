import React from 'react';
import { ICONS, COLORS, HUMAN_NAMES } from '../../constants/kinds';

class Name {
    render() {
        const { name, kind } = this.props;
        const icon = ICONS[kind];
        const color = COLORS[kind];
        const humanName = HUMAN_NAMES[kind];
        return (
            <h4 className={"ui header " + color}>
                <i className={`icon ${icon} ${color}`}></i>
                <div className="content">
                    {name}
                    <div className="sub header">{humanName}</div>
                </div>
            </h4>
        );
    }
}

export default Name;
