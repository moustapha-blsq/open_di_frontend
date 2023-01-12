import './App.css';
import './auth.css';

import './css/app.css';
import './css/app.css.map';
import './css/styles.css';
import './js/app';

import Taches from './pages/taches';
import Login from './pages/login';
import Home2 from './pages/home2';
import Setup_projet from './pages/setup_projet';
import Users from './pages/user';
import Create_user from './pages/create_user';
import Detail_projet from './pages/detail_projet';

import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home2/>}/>
          <Route path='/projet/:pid' element={<Detail_projet/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/create_user' element={<Create_user/>}/>
          <Route path='/taches' element={<Taches/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
