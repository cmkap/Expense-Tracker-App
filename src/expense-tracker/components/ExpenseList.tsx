import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (index: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>${expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2)}</th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
