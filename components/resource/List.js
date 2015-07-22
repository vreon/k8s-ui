import React from 'react';

import * as layouts from '../../constants/layouts';
import Card from './Card';
import Row from './Row';

const LAYOUT_COMPONENTS = {
    [layouts.LAYOUT_CARDS]: Card,
    [layouts.LAYOUT_TABLE]: Row,
}

class List {
    render(){
        const { layout, resources } = this.props;
        const LayoutComponent = LAYOUT_COMPONENTS[layout];

        let components = resources.map(r =>
            <LayoutComponent resource={r} key={`${r.kind}/${r.metadata.name}`} />
        );

        switch (layout) {
        case layouts.LAYOUT_CARDS:
            return this.renderDiv(components);
        case layouts.LAYOUT_TABLE:
            return this.renderTable(components);
        }
    }

    renderDiv(components){
        const { layout } = this.props;
        return (
            <div>
                {components}
            </div>
        );
    }

    renderTable(components){
        return (
            <table className="ui multibody table compact">
                <thead>
                    <tr>
                        <th>Name / Kind</th>
                        <th>Labels</th>
                        <th></th>
                    </tr>
                </thead>
                {components}
            </table>
        );
    }
}

List.defaultProps = {
    layout: layouts.LAYOUT_CARDS
};


export default List;
