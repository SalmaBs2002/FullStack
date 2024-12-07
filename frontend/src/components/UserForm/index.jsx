import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const UserForm = ({ onAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      try {
        // Use relative URL for the API
        const response = await axios.post("/api/users", {
          firstName,
          lastName,
        });

        // Optional: Pass new user data to parent component
        onAdd(response.data);

        // Clear form fields
        setFirstName("");
        setLastName("");
      } catch (error) {
        console.error("Error adding user:", error);
        alert("Failed to add user. Please try again.");
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
      />
      <TextField
        id="last-name"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ alignSelf: "flex-end" }}
      >
        Add User
      </Button>
    </Box>
  );
};

export default UserForm;
