import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../companent/sidebar";
import Menu from "../companent/menu"
import Topbar from "../companent/topbar";
import jQuery from 'jquery';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [nom_projet, setNom_projet] = useState("");
  const [description, setDescription] = useState("");
  const date = new Date();
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "-");
  var seconds = String(date.getSeconds()).padStart(2, "0");
  var minutes = String(date.getMinutes()).padStart(2, "0");
  var hour = String(date.getHours()).padStart(2, "0");
  var date_projet = dateStr + " à " + hour + ":" + minutes + ":" + seconds;
  const [date_creation, setDate_creation] = useState(date_projet);
  const [statut, setStatut] = useState(1);
  const [utilisateur, setUtilisateur] = useState(1);
  console.log(date_projet);
  let navigate = useNavigate();

  const [all_projects, setAll_projects] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/liste_projet/`)
      .then((res) => setAll_projects(res.data));
  }, []);
  const createProject = async (e) => {
    e.preventDefault();
    const nom_projet = e.target.nom_projet.value;
    //const date_creation = e.target.nom_projet.value;
    const description = e.target.description.value;

    const result = await axios.post("http://127.0.0.1:8000/api/create_projet", {
      nom_projet,
      date_creation,
      description,
      statut,
      utilisateur,
    });
    this.props.history.push("/home");
  };

  const showProject = (pid) => {
    console.log(pid);
    navigate("/projet/" + pid);
  };

  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <Menu />
      </nav>

      <div className="main">
        <Topbar />
        <main className="content">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-9 col-lg-9">
                <div className="card" align="">
                  <div className="card-header">
                    <div className="table_scroller">
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th> #</th>
                            <th>Nom du projet</th>
                            <th>Date creation</th>
                            <th>Description</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        {all_projects.map((item) => (
                          <tbody>
                            <tr>
                              <td>#</td>
                              <td>{item.nom_projet}</td>
                              <td>{item.date_creation} </td>
                              <td>{item.description} </td>

                              <td>
                                <div
                                  className="btn-group btn-group-lg mb-3"
                                  role="group"
                                  aria-label="Large button group"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    title="Ouvrir"
                                    onClick={() => showProject(item.id)}
                                  >
                                    <i className="fa fa-eye"></i>
                                  </button>
                                  <font color="white">-</font>
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    title="Archiver"
                                  >
                                    <i className="fa fa-archive"></i>
                                  </button>
                                  <font color="white">-</font>
                                  <button
                                    type="button"
                                    className="btn btn-warning"
                                    title="Editer"
                                  >
                                    <i className="fa fa-edit"></i>{" "}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="card" align="">
                  <hr />
                  <center>
                    <legend>
                      <h5>
                        <b>AJOUT NOUVEAU PROJET</b>
                      </h5>
                    </legend>
                  </center>
                  <div className="card-header">
                    <form onSubmit={createProject}>
                      <br />
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder=""
                          required
                          name="nom_projet"
                        />

                        <label htmlFor="floatingInput">Nom projet</label>
                      </div>
                      <br />
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id=""
                          placeholder=""
                          name="description"
                          required
                          row="5"
                        ></textarea>

                        <label htmlFor="floatingPassword">description</label>
                      </div>
                      <br />
                      <button
                        className="w-100 btn btn-lg btn-success"
                        type="submit"
                      >
                        Enregister
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
