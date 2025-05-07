import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Listarticles from "./components/articles/Listarticles";

import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Listcategories from "./components/categories/Listcategories";
import Insertcategories from "./components/categories/Insertcategories";
import Editcategories from "./components/categories/Editcategories";
import Viewcategories from "./components/categories/Viewcategories";
import Listscategories from "./components/scategories/Listscategories";
import Editscategories from "./components/scategories/Editscategories";
import Insertscategories from "./components/scategories/Insertscategories";
import Viewscategories from "./components/scategories/Viewscategories";
import Menu from "./components/Menu";
import Listarticlescard from "./components/Client/Listarticlescard";
import Cart from "./components/Client/Cart";
import Listarticlestable from "./components/articles/Listarticlestable";

import { CartProvider } from "use-shopping-cart";

function App() {

  return (
    <>
      <CartProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/articles" element ={<Listarticles/>}/>
          <Route path="/articles/add" element ={<Insertarticle/>}/>
          <Route path="/articles/edit/:id" element ={<Editarticle/>}/>
          <Route path="/articles/view/:id" element ={<Viewarticle/>}/>
          <Route path="/categories" element ={<Listcategories/>}/>
          <Route path="/categories/add" element ={<Insertcategories/>}/>
          <Route path="/categories/edit/:id" element ={<Editcategories/>}/>
          <Route path="/categories/view/:id" element ={<Viewcategories/>}/>
          <Route path="/scategories" element ={<Listscategories/>}/>
          <Route path="/scategories/add" element ={<Insertscategories/>}/>
          <Route path="/scategories/edit/:id" element ={<Editscategories/>}/>
          <Route path="/scategories/view/:id" element ={<Viewscategories/>}/>
          <Route path="/client" element={<Listarticlescard/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/articlestable" element={<Listarticlestable/>}/>
        </Routes>
      </Router>
      </CartProvider>
    </>
  )
}

export default App
