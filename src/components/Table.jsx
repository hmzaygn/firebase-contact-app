import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch, deleteContact } from "../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = ({ editContact }) => {
  const { isLoading, contactList } = useFetch();

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : contactList?.length === 0 ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  No Result Found
                </TableCell>
              </TableRow>
            ) : (
              contactList?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell align="center">{item.contactName} </TableCell>
                  <TableCell align="center">{item.phoneNumber} </TableCell>
                  <TableCell align="center">{item.gender} </TableCell>

                  <TableCell
                    align="center"
                    onClick={() => deleteContact(item.id)}
                  >
                    <DeleteIcon />
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={() =>
                      editContact(
                        item.id,
                        item.contactName,
                        item.phoneNumber,
                        item.gender
                      )
                    }
                  >
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
