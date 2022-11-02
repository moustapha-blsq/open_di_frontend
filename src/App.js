import './App.css';
import './auth.css';
import Login from './pages/login';
import Home from './pages/home';
import './css/app.css';
import './css/app.css.map';
import './js/app';
import './js/postcss.config';
import Setup_projet from './pages/setup_projet';

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
