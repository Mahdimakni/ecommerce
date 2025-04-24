
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Affichearticlestable from "./Affichearticlestable"

const Listarticlestable = () => {
    const [articles, setArticles] = useState([])
    const fetchArticles=async()=> {
        const res=await axios.get("http://localhost:3001/api/articles")
        setArticles(res.data)
      }
      useEffect(() => {
        fetchArticles()
      }, [])




  return (
    <div>
      <Affichearticlestable articles={articles}/>
    </div>
  )
}

export default Listarticlestable
