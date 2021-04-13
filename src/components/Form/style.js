import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "25ch",
  },
  input: {
    width: "25em",
    marginBottom: "15px",
  },
}));

export default useStyles;
