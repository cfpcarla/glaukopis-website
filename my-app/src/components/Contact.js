import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
// import {
//   Button,
//   Grid,
//   Container,
//   TextField,
//   FormControl,
//   FormHelperText,
//   OutlinedInput,
//   Input,
//   InputLabel,
//   Typography,
// } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
    submitted: false,
  });

  const handleChangeName = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleChangeEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const handleChangeMsg = (event) => {
    setFormData({ ...formData, msg: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const classes = useStyles();

  return (
    <>
      <Container>
        <form></form>
      </Container>
    </>
  );
};
export default Contact;
