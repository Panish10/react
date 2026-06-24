import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Card from './components/Card'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from "./pages/Dashboard"
import Expenses from "./pages/Expenses"
import Settings from "./pages/Settings"
import { getExpenses, saveExpense } from './api/expenseApi'

function App() {

  const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    getExpenses().then(
      response=>{
        setExpenses(response.data);
      }
    );
  },[]);

  function addExpense(expense) {
    saveExpense(expense).then(response=>{
      setExpenses([...expenses, response.data])
    });
  }

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const highestExpense = Math.max(...expenses.map(expense => expense.amount));
  const averageExpense = Math.round(totalExpense/expenses.length);

  return (
    // <div className="app">

    //   <Header username="Panish" />

    //   <div className="layout">

    //     <Sidebar />

    //     <main>
    //       <div className='cards'>
    //         <Card title="Total Expense" value={totalExpense} />
    //         <Card title="Highest Expense" value={highestExpense} />
    //         <Card title="Average Expense" value={averageExpense} />
    //       </div>
    //       <ExpenseForm addExpense={addExpense} />
    //       <ExpenseList expenses={expenses} />
    //     </main>
    //   </div>

     
    // </div>
    <BrowserRouter>
      <Header username="Panish" />
      <div className='layout'>
        <Sidebar />
        <main>
          <Routes>
            <Route path='/' element={<Dashboard expenses={expenses} />} />
            <Route path='/dashboard' element={<Dashboard expenses={expenses} />} />
            <Route path='/expenses' element={<Expenses expenses={expenses} addExpense={addExpense} />} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
