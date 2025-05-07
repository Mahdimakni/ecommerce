import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col , Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


const Insertarticle = () => {
  const [scategories,setScategories]=useState([])
 
  const fetchscategories=async()=>{
    const res= await axios.get("http://localhost:3001/api/scategories")
    setScategories(res.data)
  }
  useEffect(()=>{
    fetchscategories()
  },[])
  const[article,setArticles]=useState({})
  const navigate = useNavigate();
  const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post('http://localhost:3001/api/articles',article).then(res=>{
       navigate("/articles")
      })


    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h1>insert articles</h1>
      <Form>
          <Row className="md-2">
        <Form.Group as={Col} md="6" >
          <Form.Label>Reference</Form.Label>
          <Form.Control type="text" placeholder="reference" 
          value={article.reference}
          onChange={(e)=>setArticles({...article,reference:e.target.value})}
          />
        </Form.Group>
       
        <Form.Group as={Col} md="6" >
          <Form.Label>designation</Form.Label>
          <Form.Control type="text" placeholder="designation" 
          value={article.designation}
          onChange={(e)=>setArticles({...article,designation:e.target.value})}
          />
        </Form.Group>
        </Row>

        <Row className="md-2">
        <Form.Group as={Col} md="6" >
          <Form.Label>marque</Form.Label>
          <Form.Control type="text" placeholder="marque" 
          value={article.marque}
          onChange={(e)=>setArticles({...article,marque:e.target.value})}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>qtestock</Form.Label>
          <Form.Control type="text" placeholder="qtestock" 
          value={article.qtestock}
          onChange={(e)=>setArticles({...article,qtestock:e.target.value})}
          />
        </Form.Group>
        </Row>
        <Row className="md-2">
        <Form.Group as={Col} md="6" >

          <Form.Label>prix</Form.Label>
          <Form.Control type="text" placeholder="prix" 
          value={article.prix}
          onChange={(e)=>setArticles({...article,prix:e.target.value})}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>imageart</Form.Label>
          <Form.Control type="text" placeholder="imageart" 
          value={article.imageart}
          onChange={(e)=>setArticles({...article,imageart:e.target.value})}
          />
        </Form.Group>
        </Row>
        <Row className="md-2">
        <Form.Group as={Col} md="6"  >
          <Form.Label>scategorieID</Form.Label>
          <Form.Control type="select" as={"select"} placeholder="scategorieID" 
          value={article.scategorieID}
          onChange={(e)=>setArticles({...article,scategorieID:e.target.value})}
          >
            {
              scategories.map(scat=>
                <option value={scat._id}>{scat.nomscategorie}</option>

              )
            }
            </Form.Control>
        </Form.Group>
        </Row>
        <div>
          &nbsp;
          <button className='btn btn-success btn-sm' onClick={(e)=>handleSave(e)}><i class="fa-solid fa-floppy-disk"></i> Enregister</button>
          &nbsp;
          <Link to="/articles"><button className='btn btn-danger btn-sm'><i class="fa-solid fa-trash"></i> Annuler</button></Link>
        </div>
      </Form>
    </div>
    
  )
}
export default Insertarticle