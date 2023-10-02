import React from 'react';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setDirty] = React.useState(false);
  const valid = useValidation(value, validations);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onBlur = e => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);
  const [maxLengthError, setMaxLengthError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [inputValid, setInputValid] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);

  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'maxLength':
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case 'isEmail':
          const regEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          regEmail.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        case 'isName':
          const regName = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;
          regName.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true);
          break;
      }
    }
  }, [value]);

  React.useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError || nameError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError, nameError]);
  return { isEmpty, minLengthError, emailError, maxLengthError, inputValid, nameError };
};
