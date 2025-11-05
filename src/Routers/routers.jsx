import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "../Pages/Login";
import { Home } from '../Pages/Home';

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
                <Route path = '/' element = {<Login />}/>
                <Route path = '*' element = {<PageError/>}/>
            </Routes>
        </BrowserRouter>
    )
}