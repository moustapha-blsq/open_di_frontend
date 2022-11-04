import React from "react";

function Topbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a className="sidebar-toggle js-sidebar-toggle">
          <i className="hamburger align-self-center"></i>
        </a>
        <center><b>OPEN DATA INTEGRATION TOOL</b></center>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <li className="">
              <a href="/user_profil">
                <button className="btn btn-success">
                  <i className="fa fa-user"></i> Moustapha_blsq
                </button>
              </a>
              <font color="white">-</font>
              <a href="/">
                <button className="btn btn-danger">
                  <i className="fa fa-lock"></i> Logout
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
