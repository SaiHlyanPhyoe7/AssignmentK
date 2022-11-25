import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

// getdata from firebase
export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let ref = collection(db, c);
    const unsub = onSnapshot(ref, (snapshot) => {
      setIsSuccess(true);
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });
    return () => unsub();
  }, [c]);
  return { documents };
};
