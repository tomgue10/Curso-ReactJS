import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import { ItemDetail } from "./ItemDetail";
import { Loading } from "./Loading";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!product) return <Loading />;

  return <ItemDetail product={product} />;
};
