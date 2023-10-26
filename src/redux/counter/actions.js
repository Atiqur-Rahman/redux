import { DECREMENT, INCREMENT } from './actionTypes';

export const increment = (value) => {
    return {
        type: INCREMENT,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
    };
};
