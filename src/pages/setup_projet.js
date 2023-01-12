import React, { useEffect, useState } from "react";
import Sidebar from "../companent/sidebar";
import Topbar from "../companent/topbar";
import Menu from "../companent/menu";
import { useParams } from "react-router-dom";
import axios from "axios";
const Setup_projet = () => {
  const [project, setProject] = useState([]);
  const [file_data, setFile_data] = useState([]);
  const [file_header, setFile_header] = useState([]);
  //const [file_name, setFile_name] = useState("test");
  let { pid } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getprojet/` + pid)
      .then((res) => setProject(res.data));
  }, []);
  const path = "";
  const extract_data = async (event) => {
    /* event.preventDefault();
    path = event.target.path_file.value
    //console.log(path)
    //console.log("ceci est un test de path")*/
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/testcsv/`)
      .then((res) => setFile_data(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/csvheader/`)
      .then((res) => setFile_header(res.data));
  }, []);
  file_data.shift();
  const extract_file_data = (ev) => {
    console.log("ceci est un test de path");
  };
  var i = 0;
  const head = [];
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <Menu />
      </nav>

      <div className="main">
        <Topbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Setup projet : {project.nom_projet}</h1>
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Source de données</h5>
                    <hr />
                  </div>
                  <form onSubmit={extract_data}>
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
                      <button
                        onClick={extract_file_data}
                        className="btn btn-primary"
                      >
                        <i className="fa fa-download"></i> Extraire données
                      </button>
                      <font color="white"> - </font>
                      <button type="submit" className="btn btn-success">
                        <i className="fa fa-bookmark"></i> Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* 
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
                        <button type="submit" className="btn btn-primary">
                          <i className="fa fa-wifi"></i> Tester connexion
                        </button>
                        <font color="white"> - </font>
                        <button type="submit" className="btn btn-success">
                          <i className="fa fa-bookmark"></i> Enregistrer
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              Resultats extraction du CSV */}
              <div className="card" align="">
                <div className="card-header">
                  <h5 className="card-title mb-0">
                    Résultat extraction des données
                  </h5>
                  <hr />
                  {/* <table id="dtHorizontalVerticalExample" className="table table-striped table-bordered table-sm " cellspacing="0"
  width="100%"> */}
                  <div className="table_scroller">
                    <table className="table table-responsive table-hover">
                      {
                        <thead>
                          <tr>
                            {file_header.map((head) => (
                               <th><font size="1" face="Roboto">{head}</font></th>
                            ))}
                          </tr>
                        </thead>
                      }

                      <tbody>
                        {file_data.map((item) => (
                          <tr>
                            {item.map((it) => (
                              <td><font size="1" face="Roboto">{it}</font></td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <br/>
                  <button className="btn btn-info"> Afficher détails de la structure du CSV</button>
                </div>
              </div>
              {/* Fin extraction */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Setup_projet;
