import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryForm from './CategoryForm';

const Editcategories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState({ nomcategorie: '', imagecategorie: '' });

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
      <CategoryForm
        categorie={categorie}
        setCategorie={setCategorie}
        onSubmit={handleUpdate}
        buttonLabel="Modifier"
        buttonClass="btn-primary"
      />
    </div>
  );
};

export default Editcategories;
