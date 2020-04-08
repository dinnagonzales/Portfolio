import _ from 'lodash';

export const filterBy = function filterBy(data, cb) {
    return _.filter(data, cb);
};