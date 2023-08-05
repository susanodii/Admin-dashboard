import "./style/style.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";

import {DarkModeContext} from "./context/darkModeContext";
// import { DarkModeContext } from "./context/darkModeContext";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Login from './Pages/login/Login'
import New from "./Pages/new/New"
import Single from "./Pages/single/Single";
import { useContext } from "react";

function App() {

  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className = {darkMode ? "app dark" : "app"}>
    
     <BrowserRouter>
     <Routes>
      
     <Route path='/' >
     
     <Route index element ={<Home/>}/>
     <Route path="login" element={<Login/>}/>
      <Route path="users">

        <Route index element = {<List/>}/>
        <Route path=":userId" element = {<Single/>}/>
        
        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
</Route>

<Route path="products">

<Route index element = {<List/>}/>
<Route path=":productId" element = {<Single/>}/>

<Route path="new" element={<New  inputs={productInputs} title="Add New Product"/>}/>
</Route>
     </Route>
     </Routes>
     </BrowserRouter> 
    </div>
    
  );
}

export default App;
