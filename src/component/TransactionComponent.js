import { useState } from "react";

const TransactionComponent = ({ transactions, deleteTransaction, editTransaction }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [newAmount, setNewAmount] = useState("");
    const [newDescription, setNewDescription] = useState("");

    // Function to start editing a transaction
    const startEditing = (index, transaction) => {
        setEditIndex(index);
        setNewAmount(transaction.amount);
        setNewDescription(transaction.description);
    };

    // Function to save edited transaction
    const saveEdit = (index) => {
        editTransaction(index, newAmount, newDescription);
        setEditIndex(null); // Exit edit mode
    };

    if (transactions.length === 0) {
        return <h2>Add a transaction to show data</h2>;
    }

    return (
        <div className="transaction-container">
            <h2>Transaction History:</h2>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Amount ($)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {editIndex === index ? (
                                <>
                                    <td>
                                        <input 
                                            type="text" 
                                            value={newDescription} 
                                            onChange={(e) => setNewDescription(e.target.value)} 
                                        />
                                    </td>
                                    <td>
                                        <input 
                                            type="number" 
                                            value={newAmount} 
                                            onChange={(e) => setNewAmount(e.target.value)} 
                                        />
                                    </td>
                                    <td>
                                        <button className="save-btn" onClick={() => saveEdit(index)}>✅ Save</button>
                                        <button className="cancel-btn" onClick={() => setEditIndex(null)}>❌ Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{transaction.description}</td>
                                    <td>${transaction.amount}</td>
                                    <td>
                                        <button className="edit-btn" onClick={() => startEditing(index, transaction)}>✏️ Edit</button>
                                        <button className="delete-btn" onClick={() => deleteTransaction(index)}>❌ Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionComponent;
