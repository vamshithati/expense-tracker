import { useState } from "react";


const OverviewComponent=({transactions,addtransactions})=>{

    const[amount,setAmount]=useState("0")
    const[inputAmount,setInputAmount]=useState("")
    const[description,setDescription]=useState("")
    const[error,setError]=useState("")

    const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    
    const handleSubmit = () => {
        if (!inputAmount.trim()) {
            setError("Amount is required");
            return;
        }
        if (isNaN(inputAmount) || Number(inputAmount) <= 0) {
            setError("Enter a valid number");
            return;
        }
        if (!description.trim()) {
            setError("Description is required");
            return;
        }
    
        setError("");
        addtransactions(Number(inputAmount), description);
        setInputAmount("");
        setAmount(inputAmount);
        setDescription("");  
    };

    return (
        <div className="Transaction">
            <h3 className="balance">Balance: ${totalBalance.toFixed(2)}</h3>
        <input placeholder="Amount" value={inputAmount} onChange={(e)=>{
            setInputAmount(e.target.value);
        }}/>

        <p className="error">{error}</p>
        <input placeholder="Description" value={description} onChange={(e)=>{
            setDescription(e.target.value)
        }}/>
        <button type="submit" onClick={handleSubmit} >Add Transaction</button>

    </div>
    );
};
export default OverviewComponent;