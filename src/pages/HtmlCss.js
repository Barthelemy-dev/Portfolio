import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import NavBar from "../component/Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShowChartSharpIcon from "@material-ui/icons/ShowChartSharp";

const InputFiled = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& label": {
      color: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
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
  mainContainer: {
    background: "#343a40",
    height: "100vh",
  },
  cardContainer: {
    maxWidth: 445,
    margin: "5rem auto",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    // margin: theme.spacing(2),
  },
}));

const HtmlCss = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h3">Loan Calculator</Typography>
                <Box className={classes.cardItem}>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <AttachMoneyIcon
                      style={{ backgroundColor: "lightgray" }}
                      fontSize="large"
                    />
                    <InputFiled
                      fullWidth={true}
                      label="Loan Amount"
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ShowChartSharpIcon
                      style={{
                        backgroundColor: "lightgray",
                      }}
                      color="primary"
                      fontSize="large"
                    />
                    <InputFiled
                      fullWidth={true}
                      label="Interest"
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                    />
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <InputFiled
                      icon={<AttachMoneyIcon />}
                      fullWidth={true}
                      label="Years To Repay"
                      variant="outlined"
                      inputProps={{ style: { color: "white" } }}
                      margin="dense"
                      size="medium"
                    />
                  </Box>
                  <Button>Calculate</Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HtmlCss;
