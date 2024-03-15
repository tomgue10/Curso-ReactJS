import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { ItemListContainer } from "./components/ItemLIstContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Proximamente todos los productos que buscas!" />
    </>
  );
}

export default App;
