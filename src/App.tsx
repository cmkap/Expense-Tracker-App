import React, { useState } from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

const EXPENSES = [
  { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  { id: 2, description: "bbb", amount: 10, category: "Groceries" },
  { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
  { id: 4, description: "ddd", amount: 40, category: "Utilities" },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(EXPENSES);

  const handleDelete = (index: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== index));
    console.log("Delete", index);
  };

  if (expenses.length === 0) return null;

  const visibleExpenses = !selectedCategory
    ? expenses
    : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
