import React from "react";

function Sidebar2() {
  return (
      <div className="quixnav">
        <div className="quixnav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label first">Main Menu</li>

            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-single-04"></i>
                <span className="nav-text">Dashboard</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./index.html">Dashboard 1</a>
                </li>
                <li>
                  <a href="./index2.html">Dashboard 2</a>
                </li>
              </ul>
            </li>

            <li className="nav-label">Apps</li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-app-store"></i>
                <span className="nav-text">Apps</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./app-profile.html">Profile</a>
                </li>
                <li>
                  <a
                    className="has-arrow"
                    href="javascript:void()"
                    aria-expanded="false"
                  >
                    Email
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="./email-compose.html">Compose</a>
                    </li>
                    <li>
                      <a href="./email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="./email-read.html">Read</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./app-calender.html">Calendar</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-chart-bar-33"></i>
                <span className="nav-text">Charts</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="./chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="./chart-chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="./chart-chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="./chart-sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="./chart-peity.html">Peity</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Components</li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-world-2"></i>
                <span className="nav-text">Bootstrap</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./ui-accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="./ui-alert.html">Alert</a>
                </li>
                <li>
                  <a href="./ui-badge.html">Badge</a>
                </li>
                <li>
                  <a href="./ui-button.html">Button</a>
                </li>
                <li>
                  <a href="./ui-modal.html">Modal</a>
                </li>
                <li>
                  <a href="./ui-button-group.html">Button Group</a>
                </li>
                <li>
                  <a href="./ui-list-group.html">List Group</a>
                </li>
                <li>
                  <a href="./ui-media-object.html">Media Object</a>
                </li>
                <li>
                  <a href="./ui-card.html">Cards</a>
                </li>
                <li>
                  <a href="./ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="./ui-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="./ui-popover.html">Popover</a>
                </li>
                <li>
                  <a href="./ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="./ui-tab.html">Tab</a>
                </li>
                <li>
                  <a href="./ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="./ui-pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="./ui-grid.html">Grid</a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-plug"></i>
                <span className="nav-text">Plugins</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./uc-select2.html">Select 2</a>
                </li>
                <li>
                  <a href="./uc-nestable.html">Nestedable</a>
                </li>
                <li>
                  <a href="./uc-noui-slider.html">Noui Slider</a>
                </li>
                <li>
                  <a href="./uc-sweetalert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="./uc-toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="./map-jqvmap.html">Jqv Map</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="widget-basic.html" aria-expanded="false">
                <i className="icon icon-globe-2"></i>
                <span className="nav-text">Widget</span>
              </a>
            </li>
            <li className="nav-label">Forms</li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-form"></i>
                <span className="nav-text">Forms</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./form-element.html">Form Elements</a>
                </li>
                <li>
                  <a href="./form-wizard.html">Wizard</a>
                </li>
                <li>
                  <a href="./form-editor-summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form-pickers.html">Pickers</a>
                </li>
                <li>
                  <a href="form-validation-jquery.html">Jquery Validate</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Table</li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-layout-25"></i>
                <span className="nav-text">Table</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="table-bootstrap-basic.html">Bootstrap</a>
                </li>
                <li>
                  <a href="table-datatable-basic.html">Datatable</a>
                </li>
              </ul>
            </li>

            <li className="nav-label">Extra</li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon icon-single-copy-06"></i>
                <span className="nav-text">Pages</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="./page-register.html">Register</a>
                </li>
                <li>
                  <a href="./page-login.html">Login</a>
                </li>
                <li>
                  <a
                    className="has-arrow"
                    href="javascript:void()"
                    aria-expanded="false"
                  >
                    Error
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="./page-error-400.html">Error 400</a>
                    </li>
                    <li>
                      <a href="./page-error-403.html">Error 403</a>
                    </li>
                    <li>
                      <a href="./page-error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="./page-error-500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="./page-error-503.html">Error 503</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./page-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Sidebar2;
