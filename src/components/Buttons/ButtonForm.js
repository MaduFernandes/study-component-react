import React from "react";

import { Button } from "@material-ui/core";

const ButtonForm = () => {
  return (
    <div id="buttons">
      <Button variant="contained" id="btn">
        Sing Up
      </Button>
      <Button variant="contained" id="btn">
        Sing In
      </Button>
    </div>
  );
};

export default ButtonForm;
