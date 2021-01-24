import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({transaction}) => {
    //taking the delete transaction from the globalstate 
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        //the css has class of minus for red and plus for green, ternary to make it dynamic
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} 
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button 
            className="delete-btn"
            onClick={ () => deleteTransaction(transaction.id)}
            >x</button>
        </li>
    );
};

Transaction.propTypes = {};

export default Transaction;