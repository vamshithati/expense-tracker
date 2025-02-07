import { useState } from "react";

const OverviewComponent=(props)=>{

    const[amount,setAmount]=useState("0")
    const[inputAmount,setInputAmount]=useState("")
    const[error,setError]=useState("")

    const handleSubmit=()=>{
        if(!inputAmount.trim()){
            setError("Amount is required")
            return;
        }
        if(isNaN(inputAmount) || Number(inputAmount)<=0){
            setError("enter a valid number")
            return ;
        }
        setAmount(inputAmount);
        setError("");
        setInputAmount("");
    }

    return (
        <div className="Transaction">
            <h3>Balance:{amount}</h3>
        <input placeholder="Amount" value={inputAmount} onChange={(e)=>{
            setInputAmount(e.target.value);
        }}/>

        <p className="error">{error}</p>
        <input placeholder="Description"/>
        <button type="submit" onClick={handleSubmit} >Add Transaction</button>

    </div>
    );
};
export default OverviewComponent;