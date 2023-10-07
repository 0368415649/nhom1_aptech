function useForm() {
  const formState = {};

  const register = (name, options) => {
    const { required, maxLength, minLength, pattern } = options;

    return options;
  };

  const handleSubmit = (submitFn) => {
    return () => {
      submitFn();
    };
  };

  return {
    register,
    handleSubmit,
    formState,
  };
}

export default useForm;
