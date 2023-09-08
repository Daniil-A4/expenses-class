export { ExpenseList };

class ExpenseList {
  constructor() {
    this.render();
  }

  render() {
    const list = document.createElement('ul');
    list.className = 'expenses__list';
    
    this.element = list;
  }

  update(expenses) {
    this.element.innerHTML = expenses.map(expense => `
      <li class="expenses__record">
        ${expense.amount}
      </li>
    `).join('');
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }
}