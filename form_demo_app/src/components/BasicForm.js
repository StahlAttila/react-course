import useInput from '../hooks/use-Input'

const textValidation = (text) => {
  return text.trim() !== '';
}

const emailValidation = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const BasicForm = (props) => {
  const {
    input: firstName,
    inputIsInvalid: firstNameIsInvalid,
    enteredInputIsValid: enteredFirstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
    resetInput: resetFirstName

  } = useInput(textValidation);

  const {
    input: lastName,
    inputIsInvalid: lastNameIsInvalid,
    enteredInputIsValid: enteredLastNameIsValid,
    inputBlurHandler: lastNameBlurHandler,
    inputChangeHandler: lastNameChangeHandler,
    resetInput: resetLastName

  } = useInput(textValidation);

  const {
    input: email,
    inputIsInvalid: emailIsInvalid,
    enteredInputIsValid: enteredEmailIsValid,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    resetInput: resetEmail

  } = useInput(emailValidation);

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(`${firstName} ${lastName} ${email}`);

    resetEmail();
    resetFirstName();
    resetLastName();
  }

  const firstNameClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control';
  const emailClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';
  
  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameIsInvalid && <p className="error-text">First name must not be empty!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameIsInvalid && <p className="error-text">Last name must not be empty!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailIsInvalid && <p className="error-text">Email must be valid!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
