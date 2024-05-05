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
  const { clear, items } = useContext(CartContext);
  const total = () => {
    items.reduce((acc, item) => acc + item.quantity * item.price);
  };
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
  return (
    <Container className="mt-4">
      <h1>productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.name}>
            <li>{i.name}</li>
            <li>{i.price}</li>
            <li>{i.quantity}</li>
          </ul>
        );
      })}
      <div>TOTAL: ${total}</div>
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
    </Container>
  );
};
