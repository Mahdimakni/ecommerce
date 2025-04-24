
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Listscategories = () => {
  const[scategories,setScategories]=useState([])
  const fetchscategories=async()=>{
    const res=await axios.get("http://localhost:3001/api/scategories")
    setScategories(res.data)

  }
  useEffect(()=>{
    fetchscategories()
  },[])
  const handleDelete=async(id)=>{

    if(window.confirm("etes vous sure de vouloir supprimer")){
    try{
        await axios.delete(`http://localhost:3001/api/scategories/${id}`).then(res=>{
          fetchscategories()
        })
    }catch (error){
        console.log(error)
    }
  }
  }
  return (
    <div>
      
       <Link to="/scategories/add"> <button className='btn btn-succes btn-sm'><i class="fa-solid fa-floppy-disk"></i>Add</button></Link>
    <h1>Liste des scategories</h1>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Nom scategories</th>
          <th>Image scategories</th>
          <th>Update</th>
          <th>Delete</th>
        
        
        </tr>
      
      </thead>
      <tbody>
      {
        scategories.map((cat,index)=>
        <tr key={index}>
          <td>{cat.nomscategorie}</td>
          <td><img src={cat.imagescategorie} width={100} height={100}/></td>
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



export default Listscategories
