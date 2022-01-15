const Form = () => {
  return (
    <div className="Forms">
      <h1>Log In/Sign Up Here</h1>
      {/* Username field VVV */}
      <div className="username">
        <label for="name">
          Username {"("}4-20 Characters{"): "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="20"
          size="20"
        ></input>
      </div>
      {/* Password field VVV */}
      <div className="password">
        <label for="pass">
          Password {"("}4-20 Characters{"): "}
        </label>
        <input
          type="password"
          id="pass"
          name="pass"
          required
          minlength="8"
          maxlength="20"
          size="20"
        ></input>
      </div>
      {/* Submit Form button VVV */}
      <button id="loginSubmit">Submit</button>

      {/* Clear All Fields button VVV */}
      <button id="loginSubmit">Clear</button>
    </div>
  );
};

export default Form;
