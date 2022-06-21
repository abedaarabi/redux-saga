import React from "react";

const useComponentDidMount = (
  debtorId,
  _,
  resendBankInfoApproval,
  history,
  updateDebtor
) => {
  const [isPending, setIsPending] = React.useState(true);
  const [debtor, setDebtor] = React.useState(null);

  const resolveDebtor = () => {
    return resolveDebtor(debtorId).then((response) => {
      setDebtor(response.payload);
      setIsPending(false);

      return response.payload;
    });
  };

  React.useEffect(() => {
    resolveDebtor();
  }, []);

  const handleSubmit = (values) => {
    return updateDebtor(values).then(async () => {
      await resolveDebtor();
    });
  };

  const handleResendBankInfoApproval = (email) => {
    return resendBankInfoApproval(debtorId, email).then(async () => {
      await resolveDebtor();
    });
  };

  const handleCancel = () => {
    history.push("/stores");
  };

  return {
    isPending,
    debtor,
    handleSubmit,
    handleResendBankInfoApproval,
    handleCancel,
  };
};

export default useComponentDidMount;
