import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({expenses}) {

    const [category, setCategory] = useState("All");

    const[showExpenses, setShowExpenses] = useState(true);

    const filteredExpenses = expenses.filter((expense) => {
        if(category === "All") {
            return true;
        }

        return expense.category === category;
    });

    return(
        <div>
            <h2>Expense List</h2>

            <button onClick={() => setShowExpenses(!showExpenses)}>
                {
                    showExpenses ? "Hide Expenses" : "Show Expenses"
                }
            </button>

            <br /><br />

            <select value={category} onChange={(e)=>setCategory(e.target.value)} >
                <option>All</option>
                <option>Food</option>
                <option>Rent</option>
                <option>Shopping</option>
                <option>Travel</option>
            </select>
            {
                showExpenses && (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredExpenses.map(expense=>(
                                <ExpenseItem key={expense.id} expense={expense} />
                            ))
                        }
                    </tbody>
                </table>
                )
            }
            
        </div>
    );
}

export default ExpenseList;