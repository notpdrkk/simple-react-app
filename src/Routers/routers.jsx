import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from './../Pages/Home/index';
import Login from "../Pages/Login";

const PageError = () => {
    return (
        <div>
            <h1>Página não encontrada!</h1>
        </div>
    )
}

export const Routers = () => {
    return (
        <BrowserRouter> 
            <Routes> 
                <Route path = '/Home' element = {<Home />}/>
                <Route path = '/Login' element = {<Login />}/>
                <Route path = '*' element = {<PageError/>}/>
            </Routes>
        </BrowserRouter>
    )
}