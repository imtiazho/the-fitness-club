import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeParent from './Pages/HomeParent/HomeParent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeParent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
