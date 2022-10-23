import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [loginMessageClass, setLoginMessageClass] = useState("");
  const navigate = useNavigate();
  //const [name, setName] = useState('');

  const Connection = async (e) => {
    e.preventDefault();
    //appel de notre api depuis le backend
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await response.json();
    if (content.message === "erreur") {
      setLoginMessage("Login ou mot de passe incorrect");
      setLoginMessageClass("error-message");
    }
    if (content.message === "success") {
      navigate("/home");
    }

    console.log({ content });
  };

  return (
    <div className="container">
      <main className="form-signin">
        <form onSubmit={Connection}>
          <center><img
            className="mb-4"
            src="bs-logo.png"
            alt=""
            width="70"
            height="79"
           />
          <h2>
            <b>OPEN-DI</b>
          </h2>
          <b>OPEN DATA INTEGRATION TOOL</b>
          </center>
          <span className={loginMessageClass}><b>{loginMessage}</b></span>
          <br />
          <br />
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Mot de passe</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Se connecter
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; Bluesquare 2022</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
