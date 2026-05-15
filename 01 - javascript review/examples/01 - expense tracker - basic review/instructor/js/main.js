// 1. import the data from the file (in lieu of e.g. a database / REST API)
import expenses from './expense-data.js';

// 2. grab relevant DOM elements
const expenseContainer = document.getElementById('expense-container');
const searchTerm = document.getElementById('searchbox');
const expenseForm = document.getElementById('expense-form-add');

// 3. render out data into a grid of cards
function renderExpenses(expenseData) {
  // first, clear out existing HTML for the container (because we're about to re-render it)
  expenseContainer.innerHTML = "";

  // then, take our array of data, and render out a card for each one
  // for a given expense, add a new card containing that data to the expenseContainer's inner HTML
  expenseData.forEach(
    (expense) => {
      expenseContainer.innerHTML += `
      <div class="card" id="${expense.id}">
        <div class="header">
          <div>
            <div class="title">${expense.title}</div>
            <div class="meta category">${expense.category}</div>
          </div>
          <div class="amount">${expense.amount}</div>
        </div>
        <div class="meta date">${expense.date}</div>
        <div class="actions">
          <button class="edit-btn" id="${expense.id}">Edit</button>
          <button class="delete-btn" id="${expense.id}">Delete</button>
        </div>
      </div>
    `
    }
  );
}

// 4. call the function to actually do the render
renderExpenses(expenses);


// 5. [skeleton]: form submission:
function submitExpense() {
  // ...
}

expenseForm.addEventListener("submit", submitExpense);



