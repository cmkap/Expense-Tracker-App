import { useState } from "react";
import Form from "./components/Form";
import Selector from "./components/Selector";
import Table from "./components/Table";
const App = () => {
  const [expenseItems, setExpenseItems] = useState([
    { description: "milk", amount: 5, category: "groceries" },
    { description: "eggs", amount: 10, category: "groceries" },
    { description: "milk", amount: 5, category: "groceries" },
  
  ]);

  const [filterItems, setFilterItems] = useState([...expenseItems])
  // useState([
  //   {id:1, description: 'milk', amount: 5, category: 'groceries'},
  //   {id:2, description: 'eggs', amount: 10, category: 'utils'},
  //   {id:3, description: 'electricity', amount: 100, category: 'entertainment'},
  // ])

  const categories = [
    { label: "Groceries", value: "groceries" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Utilities", value: "utilities" },
  ];
  const title = "All categories";

  const handleDelete = (deleteIndex: number) => {
    setExpenseItems([
      ...expenseItems.filter((items, index) => index !== deleteIndex),
    ]);
    setFilterItems([
      ...expenseItems.filter((items, index) => index !== deleteIndex),
    ])
  };

  const handleSelect = (filterItem: string) => {
    console.log("selected ", filterItem);
    setFilterItems([
      ...expenseItems.filter(item => item.category == filterItem)
    ])
  }

  const calculateTotal = () => {
    return 10
  }

  return (
    <div>
      <Form
        onFormSubmit={(data) => {
          console.log("formSubmit", [...expenseItems, data]);
          setExpenseItems([...expenseItems, data]);
         
        }}
      />
      <Selector
        title={title}
        items={categories}
        onSelect={handleSelect}
      />
      <Table
      
         

       
        onDelete={handleDelete}
        items={filterItems}
        tableHeadings={["Description", "Amount", "Category"]}
      />
    </div>
  );
};

export default App;
