function useValidate(formValues, rules) {
  let result = {};

  for (const field in formValues) {
    const { value } = formValues[field];
    const { notEmpty, length, options, errorMsg: msg } = rules[field];

    let errorMsg = null;

    if (options) {
      console.log('>> Check | formValues:', formValues);
      const isValid = options(value, formValues);
      if (!isValid) {
        errorMsg = msg || 'Không hợp lệ';
      }
    }
    if (notEmpty && !value) {
      errorMsg = notEmpty;
    }

    result = {
      ...result,
      [field]: {
        ...formValues[field],
        errorMsg,
      },
    };
  }

  return result;
}

export default useValidate;
