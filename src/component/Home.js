import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useState } from "react";

const Home=()=>{
    const [transactions,setTransactions]=useState([]);
    const addtransactions = (amount, description) => {
        setTransactions((prev) => [...prev, { amount, description }]);
    };
    return (
    <div >
    
   <br/> <OverviewComponent addtransactions={addtransactions}/>
    <br/><TransactionComponent transactions={transactions}/>
    </div>
)
};
export default Home;