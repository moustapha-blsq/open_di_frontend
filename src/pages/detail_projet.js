import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../companent/sidebar";
import Menu from "../companent/menu";
import Topbar from "../companent/topbar";
import jQuery from "jquery";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Detail_projet = () => {
  const [project, setProject] = useState([]);
  const [file_data, setFile_data] = useState([]);
  const [file_header, setFile_header] = useState([]);
  const [check_cnx, setCheck_cnx] = useState(true);
  const [check_file, setCheck_file] = useState(true);
  //const [file_name, setFile_name] = useState("test");
  let { pid } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/getprojet/` + pid)
      .then((res) => setProject(res.data));
  }, []);
  const [nb_projects, setNb_project] = useState(0);
  let navigate = useNavigate();

  const TesterConnxion = async (e) => {
    setCheck_cnx(false);
  };
  const verifier_source = async(e)=>{
    setCheck_file(false)
  }
  const save_destination = async (e) => {};

  const save_source = async (e) => {};

  /* const createProject = async (e) => {
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
*/
  const showProject = (pid) => {
    console.log(pid);
    navigate("/projet/" + pid);
  };

  return (
    <div className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          Open Data Integration
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <Menu />
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Setup projet </h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Source & Destination projet
                </li>
              </ol>

              {/*<div className="">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                  <a
                    href="/"
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                  ></a>

                  <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-primary">
                    <i className="fa fa-plus-square"></i> Nouveau projet
                    </button>
                  </div>
                </header>
  </div>*/}
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-cog me-1"></i>
                  Nom projet : <b>{project.nom_projet}</b>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="card mb-6 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                          <h6 className="">Source de données</h6>
                        </div>
                        <div className="card-body">
                          <form method="post">
                            <div className="col-12">
                              <label for="email" className="form-label">
                                Nom source
                              </label>
                              <input
                                type="text"
                                name="nom_source"
                                className="form-control"
                                id="host"
                                required="yes"
                              />
                              <div className="invalid-feedback">
                                * Champ obligatoire
                              </div>
                            </div><br/>
                            <div className="col-12">
                              <label for="email" className="form-label">
                                Ajouter un fichier csv
                              </label>
                              <input
                                type="file"
                                accept=".csv"
                                name="source_file"
                                className="form-control"
                                id="host"
                                required="yes"
                              />
                              <div className="invalid-feedback">
                                * Champ obligatoire
                              </div>
                            </div>
                            <br/>
                            <div className="row">
                              <div className="col-md-4">
                                <button
                                  name="valider"
                                  className="btn btn-success"
                                  onClick={verifier_source}
                                >
                                  Vérifier le fichier
                                </button>
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="submit"
                                  name="valider"
                                  className="btn btn-primary"
                                  disabled={check_file}
                                  onClick={save_source}
                                >
                                  Enregistrer
                                </button>
                              </div>
                            </div>
                          </form>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card mb-6 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                          <h6 className="">Destination</h6>
                        </div>
                        <div className="card-body">
                          <form className="needs-validation" method="post">
                            <div className="row g-3">
                              <div className="col-12">
                                <label for="email" className="form-label">
                                  Adresse du serveur
                                </label>
                                <input
                                  type="text"
                                  name="server_host"
                                  className="form-control"
                                  id="host"
                                  placeholder="exemple : https://play.dhis2.org/"
                                  required="yes"
                                />
                                <div className="invalid-feedback">
                                  * Champ obligatoire
                                </div>
                              </div>

                              <div className="col-12">
                                <label for="address" className="form-label">
                                  Login
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  placeholder="Nom d'utilisateur"
                                  required="yes"
                                />
                                <div className="invalid-feedback">
                                  * Champ obligatoire
                                </div>
                              </div>

                              <div className="col-12">
                                <label for="address2" className="form-label">
                                  Mot de passe
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="address2"
                                  placeholder="Password"
                                  required="yes"
                                />
                                <div className="invalid-feedback">
                                  * Champ obligatoire
                                </div>
                              </div>
                            </div>
                            <br />
                            <div className="row">
                              <div className="col-md-5">
                                <button
                                  name="valider"
                                  className="btn btn-success"
                                  onClick={TesterConnxion}
                                >
                                  Tester la connexion
                                </button>
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="submit"
                                  name="valider"
                                  className="btn btn-primary"
                                  disabled={check_cnx}
                                  onClick={save_destination}
                                >
                                  Enregistrer
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2022
                </div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Detail_projet;
