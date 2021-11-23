import * as type from '../types';

const movieDetailsReducer = (state = {}, action) => {

    switch(action.type) {
        case type.DETAILS:
            return action.payload;
        default:
            return state;
    }
};

export default movieDetailsReducer;