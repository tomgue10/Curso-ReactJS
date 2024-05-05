import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_XUD1P6GuPlQe9Xwa2lrQCjDPuBsKjI8",
  authDomain: "soulkink-b4e83.firebaseapp.com",
  projectId: "soulkink-b4e83",
  storageBucket: "soulkink-b4e83.appspot.com",
  messagingSenderId: "845273690385",
  appId: "1:845273690385:web:a7f08997884c50236edcb0",
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
