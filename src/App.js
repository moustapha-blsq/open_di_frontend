import './App.css';
import './auth.css';
//import $ from 'jquery';
import './css/app.css';
import './css/app.css.map';
import './js/app';
import './js/postcss.config';

import Login from './pages/login';
import Home2 from './pages/home2';
import Home from './pages/home';
import Setup_projet from './pages/setup_projet';

/* <link href="vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
    <!-- Custom Stylesheet -->
    <link href="css/style.css" rel="stylesheet"> */

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/projet/:pid' element={<Setup_projet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
