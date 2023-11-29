import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Blog, Contact, Service } from "../../pages";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/service" element={<Service/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router