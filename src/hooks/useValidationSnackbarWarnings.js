/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useFormikContext } from 'formik';
import { useSnackbar } from 'notistack';

import { warnAboutValidationErrors } from 'admin/util';

const useValidationSnackbarWarnings = () => {
  const { isSubmitting, isValid, errors } = useFormikContext();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isSubmitting && !isValid) {
      warnAboutValidationErrors(errors, enqueueSnackbar);
    }
  }, [isSubmitting, isValid, errors]);
};

export default useValidationSnackbarWarnings;
