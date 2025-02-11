import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useState } from "react";

const Home=()=>{
    const [transactions,setTransactions]=useState([]);
    const addtransactions = (amount, description) => {
        setTransactions((prev) => [...prev, { amount: Number(amount), description }]);
    };

    const deleteTransaction = (index) => {
        const updatedTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(updatedTransactions);
    };
    const editTransaction = (index, newAmount, newDescription) => {
        let updatedTransactions = [...transactions]; // Copy transactions
        updatedTransactions[index] = { amount: Number(newAmount), description: newDescription }; // Update the selected one
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