import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid lightgray",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid white",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    //Make the Arrow
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidht: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "red",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "blue",
    color: "gray",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "black",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2005
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Bac
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "lightgray" }}
            >
              Compagny name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate veniam quod, provident amet eveniet fuga perspiciatis
              officiis officia voluptas ducimus.
            </Typography>
          </Box>

          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2010
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Psycho
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "lightgray" }}
            >
              Compagny name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate veniam quod, provident amet eveniet fuga perspiciatis
              officiis officia voluptas ducimus.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Cameraman
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "lightgray" }}
            >
              Compagny name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate veniam quod, provident amet eveniet fuga perspiciatis
              officiis officia voluptas ducimus.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Now ?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "lightgray" }}
            >
              Compagny name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate veniam quod, provident amet eveniet fuga perspiciatis
              officiis officia voluptas ducimus.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2030
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Futur
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "lightgray" }}
            >
              Compagny name where worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate veniam quod, provident amet eveniet fuga perspiciatis
              officiis officia voluptas ducimus.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default About;
