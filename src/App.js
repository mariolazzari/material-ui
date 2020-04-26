import React from "react";
import "./App.css";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  helloThereStyle: {
    fontStyle: "oblique",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography
        color="primary"
        variant="h1"
        className={classes.helloThereStyle}
      >
        Hello world!
      </Typography>
      <Button variant="outlined" color="secondary" fullWidth>
        This is my first button
      </Button>
    </div>
  );
}

export default App;
