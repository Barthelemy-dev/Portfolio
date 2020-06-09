import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/kisspng.png";

//CSS styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "darkslategray",
  },
  subtitle: {
    color: "lightslategray",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="my avatar"
        ></Avatar>
      </Grid>
      <Typography className={classes.title} variant="h5">
        <Typed
          strings={["Barthelemy de Violet Web-dev"]}
          typeSpeed={40}
        ></Typed>
      </Typography>
      <Typography className={classes.subtitle} variant="h6">
        <Typed
          strings={["HTML & CSS", "javascript", "React", "Material-UI", "Sass"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
};

export default Header;
