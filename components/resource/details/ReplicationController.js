import React from 'react';
import Name from '../Name';
import Pod from './Pod';
import ResourceLabelList from '../../ResourceLabelList';
import { COLORS } from '../../../constants/kinds';

class ReplicationController {
    render(){
        const { resource } = this.props;
        const { spec } = resource;
        return (
            <div>
                <table className="ui definition table">
                    <tbody>
                        <tr>
                            <td className="collapsing">Replicas</td>
                            <td>{spec.replicas}</td>
                        </tr>
                        <tr>
                            <td className="collapsing">Selector</td>
                            <td>
                                <ResourceLabelList color={COLORS.Pod} labels={spec.selector} />
                            </td>
                        </tr>
                        <tr>
                            <td className="top aligned collapsing">Template</td>
                            <td>
                                <Name name={spec.template.metadata.name} kind='Pod' />
                                <ResourceLabelList color={COLORS.Pod} labels={spec.template.metadata.labels} />
                                <p></p>
                                <Pod resource={spec.template} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ReplicationController;
