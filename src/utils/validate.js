const validateDebtor = debtor => {
  const re = /^(\w+\s?)*\s*$/;
  return re.test(debtor);
};

const checkFieldErrors = fields => {
  let errors = {};

  for (let field in fields) {
    const currentField = fields[field];
    if (currentField.required && currentField.value === '') {
      errors[field] = 'This field is required!';
    }

    if (!errors[field] && currentField.fullname && !validateDebtor(currentField.value)) {
      errors[field] = 'Enter valid name';
    }

    if (!errors[field] && currentField.checked === false) {
      errors[field] = 'Please accept the terms and conditions';
    }
  }

  return errors;
};

export default checkFieldErrors;
