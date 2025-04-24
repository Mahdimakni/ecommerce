
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listarticles from "./comppnments/articles/Listarticles"
import Insertarticle from "./comppnments/articles/Insertarticle"
import Editarticle from "./comppnments/articles/Editarticle"
import Viewarticle from "./comppnments/articles/Viewarticle"
import Listcategories from "./comppnments/categories/Listcategories"
import Insertcategories from "./comppnments/categories/Insertcategories"
import Editcategories from "./comppnments/categories/Editcategories"
import Viewcategories from "./comppnments/categories/Viewcategories"
import Listscategories from "./comppnments/scategories/Listscategories"
import Editscategories from "./comppnments/scategories/Editscategories"
import Insertscategories from "./comppnments/scategories/Insertscategories"
import Viewscategories from "./comppnments/scategories/Viewscategories"
import Menu from "./comppnments/Menu"
import Listarticlescard from "./comppnments/Client/Listarticlescard"

import { CartProvider } from "use-shopping-cart";
import Cart from "./comppnments/Client/Cart"
import Listarticlestable from "./comppnments/articles/Listarticlestable"
function App() {

  return (
    <>
      <CartProvider>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/articles" element={<Listarticles/>}/>
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
