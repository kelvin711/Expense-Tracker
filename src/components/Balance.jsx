import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {

    //destructuring context 
    const { transactions } = useContext(GlobalContext);
    //console.log(transactions)

    //looping through the global state and getting the amount
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (
        <>
            <h4>Your Balance</h4>
            <h1>{total}</h1>
        </>
    );
};



export default Balance;