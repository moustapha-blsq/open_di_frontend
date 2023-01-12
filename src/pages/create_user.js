import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../companent/sidebar";
import Topbar from "../companent/topbar";

function Create_user() {
  const [all_users, setAll_users] = useState([]);
  const [btn_desable, setBtn_desable] = useState(false);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users`)
      .then((res) => setAll_users(res.data));
  }, []);

  

  const match_passord = (e)=>{
    console.log(e.target)
  }
  const create_new_user = async (e) => {
        e.preventDefault();
        const nom_complet = e.target.nom_complet.value;
        const email = e.target.email.value;
        const mot_de_passe = e.target.password.value;
        const result = await axios.post("http://127.0.0.1:8000/api/register", {
          nom_complet,
          email,
          mot_de_passe
        });
       // console.log(result);
       this.props.history.push('/users');
      };
  
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <Sidebar />
      </nav>

      <div className="main">
        <Topbar />
        <main className="content">
          <div className="container-fluid p-0">
            <div className="card" align="">
              <div className="card-header" align="">
                <a href="/users">
                  <button className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Liste users{" "}
                  </button>
                </a> 
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <div className="card" align="">
              <div className="card-header">
                <div className="card-body">
                    <legend><h6><b>CREATION NOUVEAU UTILISATEUR</b></h6></legend>
                    <hr/>
                <form onSubmit={create_new_user}>
                  <label>Nom complet</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="full name"
                    name="nom_complet"
                    required
                  />
                  <br />
                  <label>Email</label>
                  <input
                    type="Email"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    required
                  />
                  <br />
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    required
                  /><br />
                  <label>Mot de passe</label>
                   <input
                    type="password"
                    className="form-control"
                    placeholder=" confirm password"
                    name="password_confirm"
                    required
                  />
                  <br />
                  <label>User groupe</label>
                  <select className="form-select mb-3">
                    <option>- - - Selectionnez - - -</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    </select>

                    <br/>
                    <button className="form-control btn btn-success" disabled={btn_desable}> Enregistrer</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Create_user;
