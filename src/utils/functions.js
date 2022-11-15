import { onValue, push, ref, remove, set, update } from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebaseConfig";

export const addUser = (contactInfo) => {
  const contactRef = ref(db, "contacts/");
  const newContactRef = push(contactRef);

  set(newContactRef, {
    contactName: contactInfo.contactName,
    phoneNumber: contactInfo.phoneNumber,
    gender: contactInfo.gender,
  });
};

export const useFetch = () => {
  const [contactList, setContactList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const contactRef = ref(db, "contacts/");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      const contactArr = [];

      for (let id in data) {
        contactArr.push({ id, ...data[id] });
      }
      setContactList(contactArr);
      setIsLoading(false);
    });
  }, []);
  return { isloading, contactList };
};

export const deleteContact = (id) => {
  remove(ref(db, "contacts/" + id));
};

export const updateContact = (contactInfo) => {
  const updates = {};

  updates["contacts/" + contactInfo.id] = contactInfo;

  return update(ref(db), updates);
};
