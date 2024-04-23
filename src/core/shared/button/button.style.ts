import colors from "assets/styles/abstracts/color";
import { rem } from "assets/styles/abstracts/functions";
import { createUseStyles } from "react-jss";

export const useCustomButtonstyle = createUseStyles({
  button: () => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: rem(15),
    transition: "background-color 0.3s ease",
    outline: "none",
  }),
  buttonContent: {
    display: "inline-flex",
    alignItems: "center",
    },
  primary: {
    backgroundColor: colors.mainColor,
    color: colors.white,
    padding: "0.5rem 1rem",
    marginRight: "1rem",
    border: `2px solid ${colors.mainColor}`,
    height: rem(49),
    "&:hover": {
      backgroundColor: colors.white,
      color: colors.mainColor,
      border: `2px solid ${colors.mainColor}`,
    },
  },
  outline: {
    backgroundColor: colors.white,
    color: colors.mainColor,
    border: `2px solid ${colors.mainColor}`,
    width: "20",
    height: rem(48),

    padding: "0.5rem 1rem",
    "&:hover": {
      backgroundColor: colors.mainColor,
      color: colors.white,
    },
  },
  iconRight: {
    marginLeft: "0.5rem",
  },
  iconDown: {
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
  },
  iconUp: {
    width: rem(25),
    height: rem(25),
    marginTop: "0.5rem",
    marginLeft: "0.5rem",
  },
});
