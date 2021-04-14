import React from 'react';
import { Grid, FormControl } from '@material-ui/core';
import { useStyles } from './style';

import '../../css/index.css';

const AccountForm = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      xs="12"
      sm="12"
      className={classes.container}
      direction="column"
      justify="center"
      alignContent="center"
    >
      <FormControl>
        <input
          class={classes.input}
          type="email"
          placeholder="Email"
          autoComplete
        ></input>
        <input
          class={classes.input}
          type="password"
          placeholder="Password"
          autoComplete
        ></input>
      </FormControl>
    </Grid>
  );
};

export default AccountForm;
