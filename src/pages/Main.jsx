import { useState } from "react";
import FormComponent from "../components/FormComponent";
import Table from "../components/Table";
import { addUser, updateContact } from "../utils/functions";

const initialValues = {
  contactName: "",
  phoneNumber: "",
  gender: "",
};

const Main = () => {
  const [contactInfo, setContactInfo] = useState(initialValues);
  const [isAdd, setIsAdd] = useState("ADD");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactInfo.id) {
      updateContact(contactInfo);
    } else {
      addUser(contactInfo);
    }

    setContactInfo(initialValues);
    setIsAdd("ADD");
  };

  const editContact = (id, contactName, phonenumber, gender) => {
    setIsAdd("UPDATE");
    setContactInfo({ id, contactName, phonenumber, gender });
  };

  return (
    <div className="main">
      <FormComponent
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        handleSubmit={handleSubmit}
        isAdd={isAdd}
      />
      <Table editContact={editContact} />
    </div>
  );
};

export default Main;
