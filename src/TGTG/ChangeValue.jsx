/* eslint-disable react/forbid-prop-types */
import React from "react";

import { Typography, Avatar, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import * as PropTypes from "prop-types";
import { compose } from "redux";

const styles = ({ spacing }) => ({
  logo: { width: spacing(7), height: spacing(7) },
  background: {
    width: "100%",
    height: spacing(7),
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
});


//  const redomArray =[
//      {
//          variant="body2", component="dt", className={classes.dt}
//      }
//  ]
const ChangeValue = ({ classes, change }) => {
  const objValue = {
    AMOUNT: (
      <Typography variant="body2">{`${
        change.value?.minorUnits / 10 ** change.value?.decimals
      } ${change.value?.code}`}</Typography>
    ),

    PERCENTAGE: (
      <Typography variant="body2">{`${change.value?.value}%`}</Typography>
    ),
    DURATION: (
      <Typography variant="body2">{`${
        change.value?.seconds * 60
      } minutes`}</Typography>
    ),
    BOOLEAN: (
      <Typography variant="body2">{change.value ? "On" : "Off"}</Typography>
    ),
    DAILYSCHEDULE: (
      <Typography variant="body2" align="center">
        {`Supply: ${change.value?.supply}
          Open/Closed: ${change.closed ? "CLOSED" : "OPEN"}
          Pickup: ${change.value?.window?.startLocal} - ${
          change.value?.window?.endLocal
        }`}
      </Typography>
    ),
    BACKGROUND: (
      <Box display="flex" justifyContent="center">
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${change.value?.currentUrl})` }}
        />
      </Box>
    ),
    LOGO: (
      <Box display="flex" justifyContent="center">
        <div
          className={classes.background}
          style={{ backgroundImage: `url(${change.value?.currentUrl})` }}
        />
      </Box>
    ),
  } || <Typography variant="body2">{`${change.value || ""}`}</Typography>;

  return objValue[change.type?.toUpperCase()];
};

ChangeValue.defaultProps = {
  change: {},
};

ChangeValue.propTypes = {
  change: PropTypes.object,
};

export default compose(withStyles(styles))(ChangeValue);
