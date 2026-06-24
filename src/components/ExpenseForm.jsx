import { useState } from "react";

function ExpenseForm({addExpense}) {
    
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newExpense = {
            
            date: date,
            category: category,
            amount: Number(amount)
        }

        addExpense(newExpense);

        setDate("");
        setCategory("");
        setAmount("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>

            <input type="text" placeholder="Date" value={date} onChange={(e)=>setDate(e.target.value)} />

            <br/><br/>

            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option>Food</option>
                <option>Rent</option>
                <option>Shopping</option>
                <option>Travel</option>
            </select>

            <br/><br/>

            <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            
            <br/><br/>

            <button>Add</button>
        </form>
    );
}

export default ExpenseForm;