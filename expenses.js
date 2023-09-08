export { Expenses };

import { ExpenseForm } from './expense-form.js';
import { ExpenseList } from './expense-list.js';
import { ExpenseTotal } from './expense-total.js';
import { ExpenseTracker } from './expense-tracker.js';

class Expenses {
  constructor() {
    this.expenseForm = new ExpenseForm();
    this.expenseList = new ExpenseList();
    this.expenseTotal = new ExpenseTotal();
    this.expenseTracker = new ExpenseTracker();
    this.render();
    this.assignListeners();
  }

  assignListeners() {
    this.expenseForm.addEventListener('expense', this.addExpense);
    this.expenseTracker.addEventListener('update', this.update);
  }

  render() {
    const container = document.createElement('section');
    const heading = document.createElement('h1');
    heading.textContent = 'Expenses';
    container.className = 'expenses';
    
    container.appendChild(heading);
    this.expenseForm.appendTo(container);
    this.expenseList.appendTo(container);
    this.expenseTotal.appendTo(container);
    
    this.element = container;
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }

  addExpense = (e) => {
    this.expenseTracker.addExpense(e.detail);
  }

  update = (e) => {
    this.expenseList.update(e.detail.expenses);
    this.expenseTotal.update(e.detail.total);
  }
}