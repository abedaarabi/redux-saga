import { useMemo } from 'react';
import { useField, useFormikContext } from 'formik';

function useFormikField(props) {
  const [field, meta] = useField(props);
  const { setFieldTouched, setFieldValue, setFieldError } = useFormikContext();
  const helpers = useMemo(
    () => ({
      setValue: (...args) => setFieldValue(field.name, ...args),
      setTouched: (...args) => setFieldTouched(field.name, ...args),
      setError: (...args) => setFieldError(field.name, ...args),
    }),
    [setFieldTouched, setFieldValue, setFieldError, field.name]
  );

  return [field, meta, helpers];
}

export default useFormikField;
