import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeParent from './Pages/HomeParent/HomeParent';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import CheckOut from './Pages/CheckOut/CheckOut';
import Registration from './Pages/Registration/Registration';
import { Toaster } from 'react-hot-toast';
import RequiredAuth from './RequiredAuth/RequiredAuth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeParent />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut />
          </RequiredAuth>
        }></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
