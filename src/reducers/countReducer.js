import * as type from '../types';

const countReducer = (state=0, action) => {

    switch(action.type) {
        case type.INCREASE:
            return state += 1;
        case type.DECREASE:
            return state -= 1;
        default:
            return state;
    }
};

export default countReducer;

