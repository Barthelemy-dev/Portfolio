import React from "react";
import { makeStyles } from "@material-ui/core";
import { BottomNavigation, Button } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "lightgray",
      "&:hover": {
        fill: "white",
        fontsize: "1.5rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <Button
        target="_blank"
        href="https://github.com/Barthelemy-dev"
        className={classes.root}
      >
        <GitHub />
      </Button>
      <Button
        target="_blank"
        href="https://fr.linkedin.com/in/barth%C3%A9l%C3%A9my-de-violet-b754a427"
        className={classes.root}
      >
        <LinkedIn />
      </Button>
      {/* <a
        href="https://github.com/Barthelemy-dev"
        className={classes.root}
        style={{ padding: "1rem" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        href="https://fr.linkedin.com/in/barth%C3%A9l%C3%A9my-de-violet-b754a427"
        className={classes.root}
        style={{ padding: "1rem" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a> */}
    </BottomNavigation>
  );
};

export default Footer;
