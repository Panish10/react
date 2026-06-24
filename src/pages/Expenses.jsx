import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses({expenses, addExpense}) {
    return(
        <div>
            <h2>Expenses</h2>

            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default Expenses;