import axios from "axios";

const API = "http://localhost:8080/api/expenses";

export function getExpenses() {
  return axios.get(API);
}

export function saveExpense(expense) {
  return axios.post(API, expense);
}
