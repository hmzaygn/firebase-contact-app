import { useState, useEffect } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Main = () => {
  const [contacts, setContacts] = useState([]);

  const contactsCollectionReference = collection(db, "contacts");

  const getContacts = async () => {
    const data = await getDocs(contactsCollectionReference);
    setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getContacts();
  }, []);

  console.log(contacts);

  return (
    <div>
      <h1>{"<HMZAYGN/>"}</h1>
      <Form />
      <Table />
    </div>
  );
};

export default Main;
