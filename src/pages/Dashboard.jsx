import Card from "../components/Card";

function Dashboard({expenses}) {

    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    const highestExpense = Math.max(...expenses.map(expense => expense.amount));
    const averageExpense = Math.round(totalExpense/expenses.length);

    return(
        <div>
            <h2>Dashboard</h2>
            <div className='cards'>
                <Card title="Total Expense" value={totalExpense} />
                <Card title="Highest Expense" value={highestExpense} />
                <Card title="Average Expense" value={averageExpense} />
          </div>
        </div>
    );
}

export default Dashboard;