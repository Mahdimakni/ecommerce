import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Listcategories = () => {
  const[categories,setCategories]=useState([])
  const fetchcategories=async()=>{
    const res=await axios.get("http://localhost:3001/api/categories")
    setCategories(res.data)

  }
  useEffect(()=>{
    fetchcategories()
  },[])
  const handleDelete=async(id)=>{

    if(window.confirm("etes vous sure de vouloir supprimer")){
    try{
        await axios.delete(`http://localhost:3001/api/categories/${id}`).then(res=>{
          fetchcategories()
        })
    }catch (error){
        console.log(error)
    }
  }
  }
  return (
    <div>
      
      <Link to="/categories/add"><button className='btn btn-succes btn-sm'>Add</button></Link>
    <h1>Liste des categories</h1>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Nom categories</th>
          <th>Image categories</th>
          <th>Update</th>
          <th>Delete</th>
        
        
        </tr>
      
      </thead>
      <tbody>
      {
        categories.map((cat,index)=>
        <tr key={index}>
          <td>{cat.nomcategorie}</td>
          <td><img src={cat.imagecategorie} width={100} height={100}/></td>
          <td><button className='btn btn-warning btn-sm'><i class="fa-sharp fa-regular fa-pen-to-square"></i>Update</button></td>
          <td><button className='btn btn-danger btn-sm'onClick={()=>handleDelete(cat._id)}><i class="fa-solid fa-delete-left"></i>Delete</button></td>
        </tr>
        )
      }
      </tbody>
      </table>

    </div>

  )

}
export default Listcategories
