import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin1",
    name: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password &&
      details.name == adminUser.name
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details don't match!");
      setError("Details don't match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div class="welcome">
          <h2>
            {" "}
            Welcome, <span>{user.name}</span>
          </h2>
          <button class="logout" onClick={Logout}>
            Logout
          </button>

          <table>
            <thead>
              <tr>
                <th>Przedmiot</th> <th>Nazwisko</th> <th>Ocena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Historia</th> <td>Nowak</td> <td>4+</td>
              </tr>
              <tr>
                <th>Historia</th> <td>Mazur</td> <td>3-</td>
              </tr>
              <tr>
                <th>Fizyka</th> <td>Nowak</td> <td>2</td>
              </tr>
              <tr>
                <th>Fizyka</th> <td>Mazur</td> <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
