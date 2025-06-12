// src/components/categories/CategoryForm.jsx
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const CategoryForm = ({ categorie, setCategorie, onSubmit, buttonLabel, buttonClass }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="nomcategorie">Nom catégorie</Form.Label>
        <Form.Control
          id="nomcategorie"
          type="text"
          placeholder="Nom catégorie"
          value={categorie.nomcategorie}
          onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="imagecategorie">Image catégorie</Form.Label>
        <Form.Control
          id="imagecategorie"
          type="text"
          placeholder="Image catégorie"
          value={categorie.imagecategorie}
          onChange={(e) => setCategorie({ ...categorie, imagecategorie: e.target.value })}
        />
      </Form.Group>

      <div>
        <button className={`btn ${buttonClass} btn-sm`} onClick={onSubmit}>
          <i className="fa-solid fa-floppy-disk"></i> {buttonLabel}
        </button>
        <Link to="/categories">
          <button className="btn btn-danger btn-sm ms-2" type="button">
            <i className="fa-solid fa-ban"></i> Annuler
          </button>
        </Link>
      </div>
    </Form>
  );
};

export default CategoryForm;
