import React from "react";
import { Outlet } from "react-router-dom";
import App from "./App";
const Layout = ()=>{
    return (
        <>
        <App/>
        <Outlet/>
        </>
    )
}
export default Layout;