function ExpenseItem({expense}) {
    return(
        <tr>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>₹{expense.amount}</td>
        </tr>
    );
}

export default ExpenseItem;