import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";


const AddTransaction = () => {

    //taking the delete transaction from the globalstate 
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }// +amount to make the amount into a number and not a string
    
        addTransaction(newTransaction);
    }



    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h3>Add new transaction</h3>
            <form
            onSubmit={onSubmit}>

            <div className="form-control">

                <label 
                htmlFor="text"
                >Text</label>

                <input 
                type="text"  
                placeholder="Enter text..."
                value={text}
                onChange={ e => setText(e.target.value)}//on change so whenever we change it needs to update that piece
                //of state. call a function and setText state to the event happening
                />
            </div>

            <div 
            className="form-control">

                <label 
                htmlFor="amount"
                >Amount 
                <br/>
                (negative - expense, positive - income)</label
                >

                <input 
                type="number" 
                placeholder="Enter amount..." 
                value={amount}
                onChange={ e => setAmount(e.target.value)} 
                />
            </div>

            <button 
            className="btn"
            >Add transaction</button>

            </form>
        </>
    );
};


export default AddTransaction;