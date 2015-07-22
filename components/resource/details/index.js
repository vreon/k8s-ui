import ReplicationController from './ReplicationController';
import Pod from './Pod';
import Service from './Service';

export { default as ReplicationController } from './ReplicationController';
export { default as Pod } from './Pod';
export { default as Service } from './Service';

export const DETAILS_COMPONENT = {
    ReplicationController,
    Pod,
    Service,
};
