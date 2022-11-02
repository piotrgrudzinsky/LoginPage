import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Username: </label>
          <input
            autocomplete="off"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label autocomplete="off" htmlFor="email">
            Email:{" "}
          </label>
          <input
            autocomplete="off"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label autocomplete="off" htmlFor="password">
            Password:{" "}
          </label>
          <input
            autocomplete="off"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <label class="rad-label">
          <input type="radio" class="rad-input" name="rad" />
          <div class="rad-design"></div>
          <div class="rad-text">League Of Legends</div>
        </label>
        <label class="rad-label">
          <input type="radio" class="rad-input" name="rad" />
          <div class="rad-design"></div>
          <div class="rad-text">Counter-Strike: Global Offensive</div>
        </label>
        {error != "" ? <div class="error">{error}</div> : ""} <br /> <br />
        <input class="submit" type="submit" value="LOGIN" /> <br />
      </div>

      <br />
    </form>
  );
}

export default LoginForm;
