import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  IconButton,
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  GitHub,
} from "@material-ui/icons";
import avatar from "../images/kisspng.png";
import { NeuButton } from "neumorphism-react";

//Create css styles
const useStyles = makeStyles((theme) => ({
  menuIcon: {
    color: "#C55E00",
    fontSize: "2rem",
  },
  menuSliderContainer: {
    width: 250,
    background: "#ccc",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#4F555A",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/about",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  //Use hooks for state
  const [state, setState] = useState({
    right: false,
  });
  //Toogler methode
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="avatar image" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#595D5E" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              {/* <NeuButton
                width="60px"
                height="40px"
                color="#595D5E"
                style={{ margin: "1rem" }}
                onClick={toggleSlider("right", true)}
              > */}
              <Menu className={classes.menuIcon} />
              {/* </NeuButton> */}
            </IconButton>
            {/* <NeuButton
              width="120px"
              height="40px"
              color="#595D5E"
              revert
              disabled
              style={{ margin: "1rem", color: "white" }}
            > */}
            <Typography variant="h5" style={{}}>
              BarthDev
            </Typography>
            {/* </NeuButton> */}
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};

export default Navbar;
