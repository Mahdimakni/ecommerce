import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Pour générer un ID unique

const Insertcategories = () => {
  const [categorie, setCategorie] = useState({
    nomcategorie: '',
    imagecategorie: '',
  });
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    // Récupérer les catégories existantes depuis localStorage
    const existing = JSON.parse(localStorage.getItem("categories")) || [];

    // Créer une nouvelle catégorie avec un ID unique
    const newCategorie = { ...categorie, _id: uuidv4() };

    // Ajouter la nouvelle catégorie à la liste et stocker
    localStorage.setItem("categories", JSON.stringify([...existing, newCategorie]));

    navigate("/categories");
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>Insertion catégorie</h1></center>
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
          <button className='btn btn-success btn-sm' onClick={handleSave}>
            <i className="fa-solid fa-floppy-disk"></i> Enregistrer
          </button>
          <Link to="/categories">
            <button className='btn btn-danger btn-sm'><i className="fa-solid fa-ban"></i> Annuler</button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Insertcategories;
