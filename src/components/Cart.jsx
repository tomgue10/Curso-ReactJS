import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { removeItem, clear, items } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items: items,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + "ha sido completada");
        }
      })
      .finally(() => {
        clear();
        setValues(initialValues);
      });
  };

  const handleRemove = (id) => removeItem(id);
  const handleClear = () => clear();

  return (
    <Container className="mt-4">
      <h1>productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.name}>
            <li>producto: {i.name}</li>
            <li>$ {i.price}</li>
            <li>cantidad:{i.quantity}</li>
            <li onClick={() => handleRemove(i.id)}>X</li>
          </ul>
        );
      })}
      <div>TOTAL: ${total()}</div>
      <button onClick={handleClear}>VACIAR</button>
      {items?.length > 0 && (
        <form>
          <label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Celular</label>
          <input
            type="text"
            value={values.celular}
            name="phone"
            onChange={handleChange}
          />
          <label>Mail</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            ENVIAR
          </button>
        </form>
      )}
    </Container>
  );
};
