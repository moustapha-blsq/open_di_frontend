import React, { useEffect, useState } from "react";
import Sidebar from "../companent/sidebar";
import Topbar from "../companent/topbar";
import { useParams } from "react-router-dom";
import axios from "axios";
const Setup_projet = () => {
  const [project, setProject] = useState([]);
  const[file_data, setFile_data] = useState([])
  let { pid } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getprojet/` + pid)
      .then((res) => setProject(res.data));
  }, []);
  //console.log(project)
  const path = "";
  const extract_data = async (event) => {
    event.preventDefault();
    path = event.target.path_file.value;
    
    console.log(path);
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/testcsv/` + path + `/10`)
      .then((res) => setFile_data(res.data));
  }, []);
  console.log(file_data)
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <Sidebar />
      </nav>

      <div className="main">
        <Topbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Setup projet : {project.nom_projet}</h1>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Source de données</h5>
                    <hr />
                  </div>
                  <form method="get" onSubmit={extract_data}>
                    <div className="card-body">
                      <label className="form-check">
                        Joindre le fichier csv
                        <input
                          type="file"
                          name="path_file"
                          className="form-control"
                          placeholder=""
                          required
                        />
                      </label>
                    </div>
                    <div className="card-body">
                      <button type="submit" className="btn btn-primary">
                        Extraire données
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card" align="">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      Résultat extraction des données
                    </h5>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Destination</h5>
                    <hr />
                  </div>
                  <form method="" action="">
                    <div className="card-body">
                      <div>
                        <label className="form-check">
                          URL du serveur <br />
                          <input
                            className="form-control"
                            type="text"
                            name="url_serveur"
                            placeholder="server url"
                            required
                          />
                        </label>
                      </div>
                      <br />
                      <div>
                        <label className="form-check">
                          Login <br />
                          <input
                            className="form-control"
                            type="text"
                            name="login"
                            placeholder="user name"
                            required
                          />
                        </label>
                      </div>
                      <br />
                      <div>
                        <label className="form-check">
                          Mot de passe <br />
                          <input
                            className="form-control"
                            type="password"
                            name="login"
                            placeholder="password"
                            required
                          />
                        </label>
                      </div>
                      <div className="card-body">
                        <button type="submit" className="btn btn-success">
                          Tester connexion
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Setup_projet;
