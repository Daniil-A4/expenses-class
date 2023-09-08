export { ExpenseForm };

class ExpenseForm extends EventTarget {
  constructor() {
    super();
    this.render();
    this.assignListeners();
  }

  assignListeners() {
    this.element.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = form.amount.valueAsNumber;
    const expense = { amount };
    const event = new CustomEvent('expense', { detail: expense });
    this.dispatchEvent(event);
    form.reset();
  }

  render() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');

    input.className = 'expenses__amount';
    input.type = 'number';
    input.name = 'amount';
    input.placeholder = 'amount';

    button.className = 'expenses__btn';
    button.textContent = 'add';

    form.append(input, button);
    
    this.element = form;
  }

  appendTo(parent) {
    parent.appendChild(this.element);
  }
}