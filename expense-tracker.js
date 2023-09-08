export { ExpenseTracker };

class ExpenseTracker extends EventTarget{
  constructor() {
    super();
    this.expenses = [];
    this.total = 0;
  }

  addExpense(expense) {
    this.expenses.push(expense);
    this.total += expense.amount;
    this.signalUpdate();
  }

  signalUpdate() {
    const event = new CustomEvent('update', { detail: { expenses: jsonClone(this.expenses), total: this.total } });
    this.dispatchEvent(event);
  }
}

function jsonClone(data) {
  return JSON.parse(JSON.stringify(data));
}