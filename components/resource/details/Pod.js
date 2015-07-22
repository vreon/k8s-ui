import React from 'react';
import Name from '../Name';

// TODO: Map k8s constants to human names

class Pod {
    render(){
        const { resource } = this.props;
        const { spec } = resource;
        return (
            <div>
                <table className="ui definition table">
                    <tbody>
                        <tr>
                            <td className="collapsing">Restart policy</td>
                            <td>{spec.restartPolicy}</td>
                        </tr>
                        <tr>
                            <td className="collapsing">DNS policy</td>
                            <td>{spec.dnsPolicy}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="ui segment">
                    {spec.containers.map(c => <Name name={c.name} key={c.name} kind='Container' />)}
                </div>
            </div>
        )
    }
}

export default Pod;
