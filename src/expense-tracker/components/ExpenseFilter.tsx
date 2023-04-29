import React from "react";
import CATEGORIES from "../category";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">All Categories</option>
      {CATEGORIES.map(catogry => <option key={catogry} value={catogry}>{catogry}</option>)}

    </select>
  );
};

export default ExpenseFilter;
