import React from "react";

const Table = () => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Otto</td>
            <td>5554443322</td>
            <td>Male</td>
            <td>
              <i className="fa-solid fa-user-xmark"></i>
            </td>
            <td>
              <i className="fa-solid fa-pen-to-square"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
