
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'

import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
const Insertcategories = () => {
  const [categorie,setCategorie]=useState({})
  const navigate=useNavigate()



  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/categories",categorie).then(res=>{

        navigate("/categories")
      })

    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>insertion categories</h1></center>
       <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Nom categorie</Form.Label>
        <Form.Control type="text" placeholder="Nom categorie"
        value={categorie.nomcategorie}
        onChange={(e)=>setCategorie({...categorie,nomcategorie:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image categorie</Form.Label>
        <Form.Control type="text" placeholder="image categorie"
        value={categorie.imagecategorie}
        onChange={(e)=>setCategorie({...categorie,imagecategorie:e.target.value})} />
      </Form.Group>
      <div>
        <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i>Enregistrer</button>
        <Link to="/categories"><button className='btn btn-danger btn-sm'><i class="fa-solid fa-ban"></i>cancel</button></Link>
      </div>
    </Form>
      
    </div>
  )
}

export default Insertcategories
