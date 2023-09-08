export { ExpenseTotal };

class ExpenseTotal {
  constructor() {
    this.render();
  }

  render() {
    const total = document.createElement('div');
    total.className = 'expenses__total';
    total.textContent = '0';
    this.element = total;
  }

  update(total) {
    this.element.textContent = total;
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }
}