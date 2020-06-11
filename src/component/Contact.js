import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { Translate } from "@material-ui/icons";

//make custom textfield
const InputFiled = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  buttonSubmit: {
    marginTop: "1rem",
    color: "white",
    borderColor: "purple",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box className={classes.form} component="form">
          <Typography className={classes.heading} variant="h5">
            Hire or contact me...
          </Typography>
          <InputFiled
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <InputFiled
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <InputFiled
            fullWidth={true}
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <Button
            className={classes.buttonSubmit}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
