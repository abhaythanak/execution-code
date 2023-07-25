import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from './constants/routes'
//import { app } from "./lib/firebase.prod";
export default function App() {
  
  return (
    <BrowserRouter>
    <Routes> 
      <Route exact path="/browse" element={<Browse/>}/>
      <Route exact path="/signin" element={<Signin/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path={ROUTES.HOME} element={<Home/>}/>
      </Routes> 
    </BrowserRouter>
  );

}


