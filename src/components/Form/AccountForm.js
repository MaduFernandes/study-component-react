import React from "react";
import { Grid, FormControl } from "@material-ui/core";
import { useStyles } from "./style";

import "../../css/index.css";

const AccountForm = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      className={classes.container}
      direction="column"
      justify="center"
      alignContent="center"
    >
      <FormControl>
        <input
          className={classes.input}
          type="email"
          placeholder="Email"
        ></input>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
        ></input>
      </FormControl>
    </Grid>
  );
};

export default AccountForm;
