import Layout from './Layout';
import './App.css'
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
