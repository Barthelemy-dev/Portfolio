import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#F5F5F5",
    top: 100,
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #333333",
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
    borderBottom: "2px solid gray",
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
        borderColor: "lightgray",
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
    background: "#C4C4C4",
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
              Scolarité
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#272727" }}
            >
              2005-2011
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              2005: Baccalauréat scientifique au lycée Edgar Poe à paris,
              <br></br>
              2005-2007: DUG cinéma à la Sorbonne Paris 1,<br></br> 2007-2009:
              Ecole des Psychologues Praticiens Paris,<br></br> 2009-2011: BTS
              Opérateur de prise de vue à l'EMC Malakof
            </Typography>
          </Box>

          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2011
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Caméraman freelance
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#272727" }}
            >
              2011-2016
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Caméraman / monteur<br></br>
              Contrat d'apprentissage chez Actua film<br></br>
              Assistant vidéo: direct en studio pour des chaines étrangères
              <br></br>
              Caméraman monteur sujets news et magazines
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            DFQM
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Realisateur Multicaméra
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#272727" }}
            >
              Troupe Colette Roumanoff (2011-2013)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Captations multi-caméra de pièces de théâtre sur support DVD
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Morgan Prod
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Assistant realisateur / caméraman
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#272727" }}
            >
              Tournages de documentaires pour France Télévision (2013-2015)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Le village préféré des français (France 2)<br></br>
              La maison préférée des français (France 2) <br></br>
              Crimes et Châtiments, Christophe Hondelatte (France 3)
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Agefi
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Relisateur films institutionnels
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#272727" }}
            >
              Réalisateur monteur de films institutionnels pour le journal
              l'Agefi (2015-2018)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Tournage de films d'entreprises pour communication interne et
              externe<br></br>
              Plateaux itw
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Grand Mercredi
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Relisateur films institutionnels
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#272727" }}
            >
              Realisateur monteur de films institutionnels pour le site internet
              Grand mercredi (2017-2020)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Tournage de films d'entreprises pour communication interne et
              externe<br></br>
              Pastilles internet<br></br>
              Interviews portraits<br></br>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Coding Academy
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Formation web developper frontend
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "gray" }}
            >
              Piscine PHP<br></br>
              HTML & CSS<br></br>
              Javascript<br></br>
              Angular<br></br>
              React<br></br>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default About;
