
const TransactionComponent = ({ transactions }) => {
    if (!Array.isArray(transactions)) {
        return <p>No transactions available</p>;
    }

    return (
        <div>
            <h2>Transaction History:</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.description}: ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TransactionComponent;