import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };
  return (
    <div className="d-flex">
      <div
        style={{ padding: "0 12px", color: "orange", fontWeight: 900 }}
        onClick={handleDecrease}
      >
        -
      </div>
      <input type="number" value={count} />
      <div
        style={{ padding: "0 12px", color: "orange", fontWeight: 900 }}
        onClick={handleIncrease}
      >
        +
      </div>
      <button onClick={handleAdd}>agregar carrito</button>
    </div>
  );
};
