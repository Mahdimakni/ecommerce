
  
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
const Insertscategories = () => {
  const [scategorie,setScategorie]=useState({})
  const navigate=useNavigate()



  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/scategories",scategorie).then(res=>{

        navigate("/scategories")
      })

    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>insertion scategories</h1></center>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Nom scategorie</Form.Label>
        <Form.Control type="text" placeholder="Nom scategorie"
        value={scategorie.nomscategorie}
        onChange={(e)=>setScategorie({...scategorie,nomscategorie:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image scategorie</Form.Label>
        <Form.Control type="text" placeholder="image scategorie"
        value={scategorie.imagescategorie}
        onChange={(e)=>setScategorie({...scategorie,imagescategorie:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>categorieID</Form.Label>
        <Form.Control type="text" placeholder="categorieID"
        value={scategorie.categorieID}
        onChange={(e)=>setScategorie({...scategorie,categorieID:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>scategorieID</Form.Label>
        <Form.Control type="text" placeholder="scategorieID"
        value={scategorie.scategorieID}
        onChange={(e)=>setScategorie({...scategorie,scategorieID:e.target.value})} />
      </Form.Group>
      <div>
        <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i>Enregistrer</button>
        <Link to="/scategories"><button className='btn btn-danger btn-sm'><i class="fa-solid fa-ban"></i>cancel</button></Link>
      </div>
      

    </Form>
      
    </div>
  )
}



export default Insertscategories
