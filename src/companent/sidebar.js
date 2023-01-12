import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">
            <img
              className="mb-4"
              src="../bs-logo.png"
              alt=""
              width="40"
              height="45"
            />{" "}
            OPEN-DI
          </span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header">
            <b>Projet</b>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/home">
              <i className="align-middle" data-feather="align-left"></i>
              <span className="align-middle">Liste</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="">
              <i className="align-middle" data-feather="log-in"></i>
              <span className="align-middle">Archive</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="">
              <i className="align-middle" data-feather="settings"></i>
              <span className="align-middle">General</span>
            </a>
          </li>

          <li className="sidebar-header">
            <b>Journal</b>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/taches">
              <i className="align-middle" data-feather="bar-chart-2"></i>
              <span className="align-middle">Taches en cours</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="maps-google.html">
              <i className="align-middle" data-feather="map"></i>
              <span className="align-middle">Statistique</span>
            </a>
          </li>

          <li className="sidebar-header">
            <b>Admin</b>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/users">
              <i className="align-middle" data-feather="user"></i>
              <span className="align-middle">User</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="">
              <i className="align-middle" data-feather="users"></i>
              <span className="align-middle">Groupe utilisateur</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="">
              <i className="align-middle" data-feather="grid"></i>
              <span className="align-middle">Role</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
