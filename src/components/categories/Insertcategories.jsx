import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CategoryForm from './CategoryForm';

const Insertcategories = () => {
  const [categorie, setCategorie] = useState({ nomcategorie: '', imagecategorie: '' });
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("categories")) || [];
    const newCategorie = { ...categorie, _id: uuidv4() };
    localStorage.setItem("categories", JSON.stringify([...existing, newCategorie]));
    navigate("/categories");
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <center><h1>Insertion catégorie</h1></center>
      <CategoryForm
        categorie={categorie}
        setCategorie={setCategorie}
        onSubmit={handleSave}
        buttonLabel="Enregistrer"
        buttonClass="btn-success"
      />
    </div>
  );
};

export default Insertcategories;
