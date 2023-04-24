import { Fragment } from "react";



interface Props {
  cartItems: string[];
  onClear: () => void;
  onAdd: () => void;
  onRemove: (index: number) => void
}

const Cart = ({ cartItems, onClear, onAdd, onRemove }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item, index) => (
        <Fragment key={item}>
        <li >{item}</li>
        <button onClick={() => onRemove(index)}>Delete</button>
        
        </Fragment>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
      <button onClick={onAdd}> Add</button>
    </>
  );
};

export default Cart;
