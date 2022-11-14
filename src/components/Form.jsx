import React from "react";

const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <i className="fa-solid fa-user"></i>
          <input type="text" placeholder="Name..." />
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <input type="number" placeholder="Phone..." />
        </div>
        <select name="gender-area" id="gender-area">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
