import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Editcategories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState({
    nomcategorie: '',
    imagecategorie: ''
  });

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const catToEdit = storedCategories.find(cat => cat._id === id);
    if (catToEdit) {
      setCategorie(catToEdit);
    } else {
      alert("Catégorie non trouvée !");
      navigate("/categories");
    }
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    const updatedCategories = storedCategories.map(cat =>
      cat._id === id ? { ...cat, ...categorie } : cat
    );
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    navigate("/categories");
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>Modifier une catégorie</h1></center>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nom catégorie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom catégorie"
            value={categorie.nomcategorie}
            onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image catégorie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image catégorie"
            value={categorie.imagecategorie}
            onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
          />
        </Form.Group>

        <div>
          <button className='btn btn-primary btn-sm' onClick={handleUpdate}>
            <i className="fa-solid fa-floppy-disk"></i> Modifier
          </button>
          <Link to="/categories">
            <button className='btn btn-danger btn-sm ms-2'>
              <i className="fa-solid fa-ban"></i> Annuler
            </button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Editcategories;
