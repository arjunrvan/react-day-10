import * as type from '../types';

const defaultState = [];

const movieReducer = (state, action) => {
    if (state === undefined) {
        state = [];
    }
    switch(action.type) {
        case type.SEARCH:
            return action.payload;
        default:
            return defaultState;
    }
};

export default movieReducer;