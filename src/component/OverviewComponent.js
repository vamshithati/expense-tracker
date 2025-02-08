import { useState } from "react";


const OverviewComponent=({addtransactions})=>{

    const[amount,setAmount]=useState("0")
    const[inputAmount,setInputAmount]=useState("")
    const[description,setDescription]=useState("")
    const[error,setError]=useState("")

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
        setDescription("");  
    };

    return (
        <div className="Transaction">
            <h3>Balance:{amount}</h3>
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