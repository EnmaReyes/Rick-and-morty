import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import style from "./App.module.css";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About/About"
import Detail from "./components/Detail/Detail.jsx"
import Form from "./components/Form/Form";
import Cards from "./components/Cards/Cards";
import Favorites from "./components/Favorites/Favorites.jsx";


 export function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(true)
  const navigate = useNavigate();

  useEffect(()=>{
      !access && navigate("/");
  },[access])

  const contraseña = "Enma2707."
  const usuario= "enmareco.co@gmail.com"

  const onSearch = (id) => {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "277f6ade46a8.202ec27b1169af7ce0ad";
    const URL_BASE= "http://localhost:3003"

    if(characters.find((char) => char.id === id)){
      return alert("Personaje seleccionado");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name){
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };
  const onClose = (id) => {
   setCharacters(characters.filter((char) => char.id !== id));
  };

   const login = (userData)=>{
      if(userData.username === usuario && userData.password === contraseña){
          setAccess(true);
          navigate("/home");
      }else{
        alert("Datos incorrectos")
    }
   }
  return (
  <div className ={style.appBody} >
    {pathname !== "/" && <Nav onSearch={onSearch} />} 
    <Routes>
      <Route 
      path="/" element={< Form login={login}/>}/>

      <Route 
        path="/home"
        element={<Cards characters={characters} onClose={onClose} />}
      />

      <Route path="/about" element={<About />}/>
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/detail/:detailId" element={<Detail/>}/>
    </Routes>
  </div> 
  )
}

export default App;
