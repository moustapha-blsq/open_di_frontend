import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../companent/sidebar";
import Topbar from "../companent/topbar";

function Users() {
  const [all_users, setAll_users] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users`)
      .then((res) => setAll_users(res.data));
  }, []);
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
                    <a href="/create_user"><button className="btn btn-primary"><i className="fa fa-user-plus"></i> Nouveau </button></a>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <div className="card" align="">
              <div className="card-header">
                <table className="table">
                  <thead>
                    <tr>
                      <th> #</th>
                      <th>Nom complet</th>
                      <th>Email</th>
                      <th>User groupe</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {all_users.map((item) => (
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>{item.nom_complet}</td>
                        <td>{item.email}</td>
                        <td>groupe</td>
                        <td>
                          <div
                            class="btn-group btn-group-lg mb-3"
                            role="group"
                            aria-label="Large button group"
                          >
                           <button
                              type="button"
                              class="btn btn-primary"
                              title="Ouvrir"
                              onClick=""
                            >
                              <i className="fa fa-eye"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              title="Archiver"
                            >
                              <i className="fa fa-edit"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
                              title="supprimer"
                            >
                              <i className="fa fa-archive"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger"
                              title="Editer"
                            >
                              <i className="fa fa-trash"></i>{" "}
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
        </main>
      </div>
    </div>
  );
}

export default Users;
