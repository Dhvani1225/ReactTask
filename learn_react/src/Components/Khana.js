import React from "react";
import { useSelector, Connect, useDispatch } from "react-redux";
import { buyDosha, buyDabeli } from "../Redux/Action/restourantAction";

export default function ReduxRestaurant() {
    const countDosha = useSelector((state) => state.restaurant.countDosha);
    const countDabeli = useSelector((state) => state.restaurant.countDabeli);
    const dispatch = useDispatch();


    const handleBuyDosha = () => {
        dispatch(buyDosha())
    };
    const handleBuyDabeli = () => {
        dispatch(buyDabeli())
    };

    return (
        <div>
            <p>Number of Dosha Available : {countDosha}</p>
            <p>Number of Dabeli Available : {countDabeli}</p>
            <button onClick={handleBuyDosha}>Buy Dosha</button>
            <button onClick={handleBuyDabeli}>Buy Dabeli</button>
        </div>
    )
}