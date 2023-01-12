import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../companent/sidebar";
import Menu from "../companent/menu";
import Topbar from "../companent/topbar";
import jQuery from "jquery";
import { useNavigate } from "react-router-dom";
const Home2 = () => {
  /*const [nom_projet, setNom_projet] = useState("");
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
  console.log(date_projet);*/
  const [nb_projects, setNb_project] = useState(0);
  let navigate = useNavigate();

  const [all_projects, setAll_projects] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/liste_projet/`)
      .then((res) => setAll_projects(res.data));
  }, []);

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
              <h1 className="mt-4">Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-default text-black mb-4">
                    <div className="card-body">Total projets</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <h5 className="matrics">0{all_projects.length}</h5>
                      <div className="small text-black">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-default text-black mb-4">
                    <div className="card-body">Warning Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-black stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-default text-black mb-4">
                    <div className="card-body">Success Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-black stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-default text-black mb-4">
                    <div className="card-body">Danger Card</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a className="small text-black stretched-link" href="#">
                        View Details
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <i className="fas fa-table me-1"></i>
                  Projets
                </div>
                <div className="card-body">
                 {/*<table id="datatablesSimple table">
                    <thead>
                      <tr>
                        <th> #</th>
                        <th>Nom du projet</th>
                        <th>Date creation</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th> #</th>
                        <th>Nom du projet</th>
                        <th>Date creation</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    {all_projects.map((item) => (
                      <tbody>
                        <tr>
                          <td>#</td>
                          <td>{item.nom_projet}</td>
                          <td>{item.date_creation} </td>
                          <td>{item.description} </td>

                          <td>
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
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table> */} 
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {all_projects.map((item) => (
                  <div className="col">
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <p className="card-text"><b>{item.nom_projet}</b></p>
                        <hr/>
                        <p><font size="1">créé le : {item.date_creation}</font></p>
                        <p>Description : {item.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              title="Ouvrir"
                              onClick={() => showProject(item.id)}
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-warning"
                            >
                              Edit
                            </button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default Home2;
