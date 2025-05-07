import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listcategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchcategories = async () => {
    const res = await axios.get("http://localhost:3001/api/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchcategories();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      try {
        await axios.delete(`http://localhost:3001/api/categories/${id}`);
        fetchcategories();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Link to="/categories/add">
        <button className="btn btn-success btn-sm">Add</button>
      </Link>
      <h1>Liste des catégories</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom catégorie</th>
            <th>Image catégorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index}>
              <td>{cat.nomcategorie}</td>
              <td>
                <img src={cat.imagecategorie} width={100} height={100} alt={cat.nomcategorie} />
              </td>
              <td>
                <button className="btn btn-warning btn-sm">
                  <i className="fa-sharp fa-regular fa-pen-to-square"></i> Update
                </button>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat._id)}>
                  <i className="fa-solid fa-delete-left"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listcategories;
