import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../companent/sidebar";
import Sidebar2 from "../companent/sidebar2";
import Topbar from "../companent/topbar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [nom_projet, setNom_projet] = useState("");
  const [description, setDescription] = useState("");
  const [date_creation, setDate_creation] = useState(new Date());
  const [statut, setStatut] = useState(1);
  const [utilisateur, setUtilisateur] = useState(1);

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
    console.log(result);
  };
  const showProject = (pid) => {
    console.log(pid);
    navigate("/projet/" + pid);
  };

  return (
    <div className="wrapper">
        <Sidebar2 />

      <div className="main">
        <Topbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Projet</h1>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="card" align="">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Liste</h5>
                    <hr />
                    <table className="table table-sm">
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
                            <td></td>
                            <td>
                              <span>
                                <a
                                  href=""
                                  onClick={() => showProject(item.id)}
                                  title="Ouvrir"
                                >
                                    <i className="fa fa-eye"></i>
                                </a>
                              </span>
                              <span>
                                <a title="Archiver">
                                    <i className="fa fa-archive"></i>
                                </a>
                              </span>
                                
                                <a title="Editer">
                                    <i className="fa fa-edit"></i>
                                </a>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card" align="">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Nouveau projet</h5>
                    <hr />
                    <form onSubmit={createProject}>
                      <div className="">
                        <div>
                          <label className="form-check">
                            Nom projet <br />
                            <input
                              className="form-control"
                              type="text"
                              name="nom_projet"
                              placeholder="project name"
                              required
                              onChange={(e) =>
                                setNom_projet(e.target.nom_projet.value)
                              }
                            />
                          </label>
                        </div>
                        <br />
                        <div>
                          <label className="form-check">
                            Description <br />
                            <textarea
                              className="form-control"
                              type="text"
                              name="description"
                              placeholder="say something"
                              required
                              maxLength="250"
                              onChange={(e) =>
                                setDescription(e.target.description.value)
                              }
                            />
                          </label>
                        </div>

                        <div className="card-body">
                          <button type="submit" className="btn btn-primary">
                            <i className="align-middle" data-feather=""></i>{" "}
                            Ajouter projet
                          </button>
                        </div>
                      </div>
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
