import React from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
  Grid,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const FormComponent = ({
  contactInfo,
  setContactInfo,
  handleSubmit,
  isAdd,
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  return (
    <Grid
      className="form-container"
      container
      textAlign="center"
      direction="column"
    >
      <Box className="contact-header">
        <div>
          <a
            href="https://github.com/hmzaygn?tab=repositories"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<HMZAYGN/> "}</code>
          </a>
        </div>
        <span className="design header">design</span>
      </Box>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="contactName"
              value={contactInfo.contactName || ""}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              value={contactInfo.phoneNumber || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
                value={contactInfo.gender || ""}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" value="Submit">
              {isAdd}
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;
