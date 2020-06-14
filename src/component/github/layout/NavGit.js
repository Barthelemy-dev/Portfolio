import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

const NavGit = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <GitHub>{title}</GitHub>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

//Default Props
NavGit.defaultProps = {
  title: "Github Finder",
};
//Typer les props
NavGit.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default NavGit;
