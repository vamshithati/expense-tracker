import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useState } from "react";

const Home=()=>{
    const [transactions,setTransactions]=useState([]);
    const addtransactions = (amount, description, type) => {
        setTransactions((prev) => [...prev, { amount: Number(amount), description, type }]);
    };

    const deleteTransaction = (index) => {
        const updatedTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(updatedTransactions);
    };
    const editTransaction = (index, newAmount, newDescription, newType) => {
        let updatedTransactions = [...transactions]; // Copy transactions
        updatedTransactions[index] = { amount: Number(newAmount), description: newDescription , type:newType}; // Update the selected one
        setTransactions(updatedTransactions);
    };

    return (
    <div >
    
   <br/> <OverviewComponent transactions={transactions} addtransactions={addtransactions}/>
    <br/><TransactionComponent transactions={transactions} deleteTransaction={deleteTransaction}
    editTransaction={editTransaction}/>
    </div>
)
};
export default Home;