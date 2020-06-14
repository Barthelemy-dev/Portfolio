import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import githubFinder from "../images/github-finder.jpg";
import miniGame from "../images/games.jpg";
import calculator from "../images/calculator.jpg";
import paint from "../images/paint-yellow.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* {Project-1} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={githubFinder}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Github Finder
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptates culpa assumenda porro, perferendis nostrum!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  component={Link}
                  to={"/github-finder"}
                >
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>

        {/* {Project-2} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={miniGame}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Mini Game
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  You just need a finger, a smile and a mousse to play, you
                  don't have a finger? Ask Google...
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>

        {/* {Project-3} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={calculator}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Loan Calculator
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  With this, no more cash flow problems, you'll know how much
                  and until when your monthly payments will be running{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  component={Link}
                  to={"/loan-calculator"}
                >
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* {Project-4} */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={paint}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  EdgeLedger
                </Typography>
                <Typography component="p" variant="body2" color="textSecondary">
                  Finance is for a lot of people a problem, you have to make the
                  difference!{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  <a
                    href="https://edge-ledger-123.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Live Demo
                  </a>
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
