import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import NavBar from "../component/Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShowChartSharpIcon from "@material-ui/icons/ShowChartSharp";
import { NeuButton, NeuTextInput } from "neumorphism-react";

//CSS own style
// const InputFiled = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "black",
//     },
//     "& label": {
//       color: "gray",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "gray",
//       },
//       "&:hover fieldset": {
//         borderColor: "green",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "blue",
//       },
//     },
//   },
// })(TextField);

//add theme style
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#343a40",
    height: "100vh",
  },
  cardContainer: {
    maxWidth: 445,
    margin: "5rem auto",
    backgroundColor: "#EEEEEE",
    color: "black",
  },
  cardItem: {
    display: "flex",
    alignItems: "center",
  },
  buttonSubmit: {
    marginTop: "1rem",
    color: "black",
    borderColor: "black",
  },
}));

const LoanCalculator = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Grid container justify="center" className={classes.mainContainer}>
        {/* Neumorpisme Card  */}
        <Grid items>
          <Card
            className={classes.cardContainer}
            style={{ borderRadius: "30px" }}
          >
            <CardActionArea component="div">
              <CardContent>
                <Typography variant="h3">Loan Calculator</Typography>
                <Box className={classes.cardItem}>
                  <NeuButton
                    width="60px"
                    height="40px"
                    color="#EEEEEE"
                    disabled
                  >
                    <AttachMoneyIcon />
                  </NeuButton>
                  <NeuTextInput
                    color="#EEEEEE"
                    style={{ padding: "1rem" }}
                    placeholder="Loan Amount"
                  ></NeuTextInput>
                </Box>
                <br />
                <br />
                <Box className={classes.cardItem}>
                  <NeuButton
                    width="60px"
                    height="40px"
                    color="#EEEEEE"
                    disabled
                  >
                    <ShowChartSharpIcon />
                  </NeuButton>
                  <NeuTextInput
                    color="#EEEEEE"
                    style={{ padding: "1rem" }}
                    placeholder="Interest"
                    id="interest"
                  ></NeuTextInput>
                </Box>
                <br />
                <br />
                <NeuTextInput
                  color="#EEEEEE"
                  style={{ padding: "1rem" }}
                  placeholder="Years To Repay"
                  id="years"
                ></NeuTextInput>
                <br />
                <br />
                <NeuButton
                  onClick={testFun}
                  color="#EEEEEE"
                  style={{ padding: "1rem" }}
                >
                  Calculate
                </NeuButton>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const testFun = () => console.log("c'est un test");

// const calculateResults = () => {
//   //UI variables
//   const amount = document.getElementById("amount");
//   const interest = document.getElementById("interest");
//   const years = document.getElementById("years");
//   //UI Variables Not Show
//   const monthlyPayment = document.getElementById("monthly-payment");
//   const totalPayment = document.getElementById("total-payment");
//   const totalInterest = document.getElementById("total-interest");

//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parseFloat(interest.value) / 100 / 12;
//   const calculatedPayment = parseFloat(years.value) * 12;
//   //Compute monthly payment

//   const x = Math.pow(1 + calculatedInterest, calculatedPayment);
//   const monthly = (principal * x * calculatedInterest) / (x - 1);

//   if (isFinite(monthly)) {
//     monthlyPayment.value = monthly.toFixed(2);
//     totalPayment.value = (monthly * calculatedPayment).toFixed(2);
//     totalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);
//     //Show resuslts
//     document.getElementById("results").style.display = "block";
//     //Hide loarder
//     document.getElementById("loading").style.display = "none";
//   } else {
//     showError("Please check yout numbers");
//   }
//   // console.log("its work");
// };
// //Show error
// function showError(error) {
//   //Hide resuslts
//   document.getElementById("results").style.display = "none";
//   //Hide loarder
//   document.getElementById("loading").style.display = "none";
//   //Create a div
//   const errorDiv = document.createElement("div");
//   //Get elements
//   const card = document.querySelector(".card");
//   const heading = document.querySelector(".heading");

//   //Add class
//   errorDiv.className = "alert alert-danger";
//   //Create text node and append to div
//   errorDiv.appendChild(document.createTextNode(error));

//   //Insert error above heading
//   card.insertBefore(errorDiv, heading);

//   //Clear error after 3 sec
//   setTimeout(clearError, 3000);
// }
// //clear error function
// function clearError() {
//   document.querySelector(".alert").remove();
// }

export default LoanCalculator;
