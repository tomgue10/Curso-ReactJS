import cart from "../assets/shopping-cart.png";

export const CartWidget = () => {
  return (
    <div id="cartWidget">
      <img src={cart} alt="cart" width={35} />
      <span>3</span>
    </div>
  );
};
