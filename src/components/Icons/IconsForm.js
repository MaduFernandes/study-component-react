import React from "react";

//Icons
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

//Material-ui
import { Grid } from "@material-ui/core";

//Styles
import { useStyles } from "./style";
import "../../css/index.css";

const IconsForm = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        item
        className={classes.icon}
        direction="row"
        justify="center"
        alignContent="center"
      >
        <MdEmail className="icon" />
        <SiFacebook className="icon" />
        <FaTwitter className="icon" />
      </Grid>
    </>
  );
};

export default IconsForm;
