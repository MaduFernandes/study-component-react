import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      width: "25ch",
    },

    container: {
      height: "300px",
    },

    input: {
      width: "432px",
      height: "62px",
      borderRadius: "7px",
      outline: "none",
      background: "#ffff",
      border: "none",
      paddingLeft: "20px",
      fontSize: "20px",
      margin: "20px",
    },
  })
);
