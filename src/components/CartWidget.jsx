import cart from "../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <Link to="/cart" id="cartWidget">
      <img src={cart} alt="cart" width={25} />
      <span>{total}</span>
    </Link>
  );
};
