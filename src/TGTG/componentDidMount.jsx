import React from "react";

import { LinearProgress, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import withErrorBoundary from "@common/containers/with-error-boundary/WithErrorBoundary";
import { DebtorForm } from "@common/forms";
import { DebtorEditHeader } from "admin-debtors/components";
import { mapDataToDropDown } from "admin/util";
import useComponentDidMount from "./useComponentDidMount";

const styles = ({ spacing, colors }) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  paper: {
    padding: spacing(4),
  },
  loader: {
    background: colors.background.gradient,
  },
  loadingText: {
    marginTop: spacing(4),
    animation:
      "tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 800ms infinite alternate backwards",
  },
});

const AdminStoresEdit = ( props) => {
  const {
    resolveDebtor,
    updateDebtor,
    resendBankInfoApproval,
    history,
    classes,
    availableLanguages,
    match: {
      params: { debtorId },
    },
  } = props;

  const {
    isPending,
    debtor,
    handleSubmit,
    handleResendBankInfoApproval,
    handleCancel,
  } = useComponentDidMount(
    debtorId,
    resolveDebtor,
    resendBankInfoApproval,
    history,
    updateDebtor
  );

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {isPending && (
          <LinearProgress
            classes={{
              bar1Indeterminate: classes.loader,
              bar2Indeterminate: classes.loader,
            }}
          />
        )}
        {isPending && (
          <Typography
            className={classes.loadingText}
            align="center"
            variant="h4"
            color="textSecondary"
          >
            Loading debtor...
          </Typography>
        )}
        {!isPending && (
          <React.Fragment>
            <DebtorEditHeader debtor={debtor} />
            <DebtorForm
              debtor={debtor}
              countryConfig={debtor.countryConfig}
              disabled={isPending}
              availableLanguages={availableLanguages
                .filter(
                  (language) =>
                    language.country === debtor.countryConfig.isoCode
                )
                .map(mapDataToDropDown)}
              setAddressFieldReady={() => ({})}
              addressFieldReady
              resendBankInfoApproval={handleResendBankInfoApproval}
              onSubmit={handleSubmit}
              payoutCycleOptions={[]}
            />
          </React.Fragment>
        )}
      </Paper>
    </div>
  );
};

AdminStoresEdit.defaultProps = {
  availableLanguages: [],
};

AdminStoresEdit.propTypes = {
  resolveDebtor: PropTypes.func.isRequired,
  updateDebtor: PropTypes.func.isRequired,
  resendBankInfoApproval: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  availableLanguages: PropTypes.arrayOf(PropTypes.object),
};

export default compose(
  withErrorBoundary(),
  withStyles(styles),
  withRouter
)(AdminStoresEdit);
