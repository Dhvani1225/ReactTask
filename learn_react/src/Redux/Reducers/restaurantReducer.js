import { Switch } from "react-router";
import { BUY_DABELI, BUY_DOSHA } from "../Action/restourantAction";
const initialSate = {
    countDosha: 10,
    countDabeli: 10,
}

const restaurant = (state = initialSate, action) => {
    switch (action.type) {
        case BUY_DOSHA:
            return { ...state, countDosha: state.countDosha - 1 };
        case BUY_DABELI:
            return { ...state, countDabeli: state.countDabeli - 1 };
        default:
            return state;
    }
}

export default restaurant;