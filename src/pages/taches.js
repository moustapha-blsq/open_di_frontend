import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Sidebar from "../companent/sidebar";
import Topbar from "../companent/topbar";
import { useNavigate } from "react-router-dom";
const Taches = () => {
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
  //setAll_projects("test test test")
  //console.log({all_projects})
  //const request = {
  /* const nom_projet' : nom_projet,
          'date_creation' : date_creation,
          'description' : description,
          'statut' : statut,
          'utilisateur' : utilisateur*/
  // }
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
    // console.log(result);
    this.props.history.push("/home");
  };

  const showProject = (pid) => {
    console.log(pid);
    navigate("/projet/" + pid);
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
            <div className="row">
              <div className="col-md-9 col-lg-12">
                <div className="card" align="">
                  <div className="card-header">
                    <legend>
                      <h6>
                        <b>EXECUTION DES TACHES</b>
                      </h6>
                    </legend>
                    <hr />
                    <table className="table">
                      <thead>
                        <tr>
                          <th> #</th>
                          <th>Nom du projet</th>
                          <th>Description</th>
                          <th>Statut</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      {all_projects.map((item) => (
                        <tbody>
                          <tr>
                            <td>#</td>
                            <td>{item.nom_projet}</td>
                            <td>{item.description} </td>
                            <td>
                            <div
                                class="btn-group btn-group-lg mb-3"
                                role="group"
                                aria-label="Large button group"
                              >
                              <button class="btn btn-danger btn-lg" title="prèt à être exporté">
                              <i className="fa fa-check-circle"></i>
                              </button>
                              </div>
                            </td>
                            <td>
                              <div
                                class="btn-group btn-group-lg mb-3"
                                role="group"
                                aria-label="Large button group"
                              >
                                <button
                                  type="button"
                                  class="btn btn-primary"
                                  title="Exporter"
                                  onClick={() => showProject(item.id)}
                                >
                                  <i className="fa fa-external-link"></i>
                                </button>
                                <font color="white">-</font>
                                <button
                                  type="button"
                                  class="btn btn-success"
                                  title="Voir détails et messages"
                                >
                                  <i className="fa fa-pie-chart"></i>
                                </button>
                                <font color="white">-</font>
                                <button
                                  type="button"
                                  class="btn btn-warning"
                                  title="Taux couverture export"
                                >
                                  <i className="fa fa-percent"></i>
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
              <div className="col-md-3 col-lg-3"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Taches;
