import React, { useState } from "react";
import Button from "./Button";

interface Props {
   
  items: { description: string; amount: number; category: string }[];
  tableHeadings: string[];
  onDelete: (index: number) => void;
}

const Table = ({ tableHeadings, items, onDelete}: Props) => {
    const expTotal = () => {
        let num = 0
        items.map(item =>  num += item.amount)
        return num

    }
  return (

    
    <table className="mb-3 table table-bordered">
      <thead>
        <tr>
          {tableHeadings.map((tableHeading) => (
            <th key={tableHeading} scope="col">
              {tableHeading}
            </th>
          ))}

          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={`${item.category}-${index}`}>
            <td style={{ textTransform: "capitalize" }}>{item.description}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td>
              <p style={{ textTransform: "capitalize" }}>{item.category}</p>
            </td>
            <td>
              <Button 
                color="outline-danger"
                onClick={() => {
                  onDelete(index);
                  console.log("delete clicked");
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
        <tr>
            <th>Total</th>
            <td>${expTotal().toFixed(2)}</td>
        </tr>


        {/* <tr>
          <td>Milk</td>
          <td>$5.00</td>
          <td>Groceries</td>
          <td>
            <Button onClick={() => console.log("delete clicked")}>
              Delete
            </Button>
          </td>
        </tr>

        <tr>
          <td>Milk</td>
          <td>$5.00</td>
          <td>Groceries</td>
          <td>
            <Button onClick={() => console.log("delete clicked")}>
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>$5.00</td>
          <td>Groceries</td>
          <td>
            <Button onClick={() => console.log("delete clicked")}>
              Delete
            </Button>
          </td>
        </tr>
        <tr>
          <td>Milk</td>
          <td>$5.00</td>
          <td>Groceries</td>
          <td>
            <Button onClick={() => console.log("delete clicked")}>
              Delete
            </Button>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
