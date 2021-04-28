import React from "react";

import { Grid, Typography } from "@material-ui/core";
import "./css/index.css";

import AccountForm from "./components/Form/AccountForm";
import ButtonForm from "./components/Buttons/ButtonForm";
import IconsForm from "./components/Icons/IconsForm";

const App = () => {
  return (
    <div className="content">
      <div className="container">
        <Grid item xs={12}>
          <Typography id="title">Create Account</Typography>
        </Grid>
        <Grid item xs={12}>
          <IconsForm />
        </Grid>
        <AccountForm />
        <Grid item xs={12}>
          <ButtonForm />
        </Grid>
      </div>
    </div>
  );
};

export default App;
