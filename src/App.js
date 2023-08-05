import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";

import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Login from './Pages/login/Login'
import New from "./Pages/new/New"
import Single from "./Pages/single/Single";

function App() {
  return (
    <div className="App">
    
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
