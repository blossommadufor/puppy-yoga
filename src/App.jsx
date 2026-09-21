import Layout from './Layout';
import './App.css'
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
