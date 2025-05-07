import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const Listarticles = () => {
  const [articles, setArticles] = useState([])
  const fetchArticles=async()=> {
    const res=await axios.get("http://localhost:3001/api/articles")
    setArticles(res.data)
  }
  useEffect(() => {
    fetchArticles()
  }, [])
  const handleDelete=async(id)=> {
    if(window.confirm("Are you sure you want to delete")){
    try {
      await axios.delete(`http://localhost:3001/api/articles/${id}`)
    .then(res=>fetchArticles())}
    catch(error) {
      console.log(error)
    }
  }
  }
  return (
    <div>
      <Link to="/articles/add"><button className='btn btn-success btn-sm'><i class="fa-solid fa-plus"></i>  Ajouter</button></Link>
      <h1> liste des articles</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>designation article </th>
            <th>Image article </th>
            <th>Marque article </th>
            <th>Prix article </th>
            <th>Qte stock </th>
            <th>Reference article </th>
            <th>updatedAt </th>
            <th>Update </th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody>
          {
            articles.map((art,index)=>(
            <tr>
              <td>{art.designation}</td>
              <td><img src={art.imageart} width={100} height={100} /></td>
              <td>{art.marque}</td>
              <td>{art.prix}</td>
              <td>{art.qtestock}</td>
              <td>{art.reference}</td>
              <td>{art.updatedAt}</td>
              <td><Link to={`/articles/edit/${art._id}`}><button className='btn btn-warning btn-sm'><i class="fa-solid fa-pen"></i>  Update</button></Link></td>
              <td><button className='btn btn-danger btn-sm'onClick={()=>handleDelete(art._id)} ><i class="fa-solid fa-delete-left"></i>  Delete</button></td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Listarticles