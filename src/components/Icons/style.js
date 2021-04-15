import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },

    icon: {
      width: "540px",
      height: "62px",
      borderRadius: "7px",
      border: "1px solid black",
      fontSize: "20px",
      margin: "20px",
    },
  })
);
