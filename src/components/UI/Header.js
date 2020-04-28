import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AdminIcon from "@material-ui/icons/SupervisedUserCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((these) => ({
  typography: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typography}>Menu</Typography>
        <AdminIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
