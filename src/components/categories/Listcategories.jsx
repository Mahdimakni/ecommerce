import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Listcategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Vérifie si les données existent déjà dans localStorage
    const saved = JSON.parse(localStorage.getItem("categories"));

    if (saved && Array.isArray(saved) && saved.length > 0) {
      setCategories(saved);
    } else {
      // Données statiques par défaut
      const fakeData = [
        {
          _id: '1',
          nomcategorie: 'Électronique',
          imagecategorie: 'https://img.grouponcdn.com/deal/49Js9bbWtLM2dcwJYrZEghwLKhg2/49-1000x600/v1/t600x362.jpg',
        },
        {
          _id: '2',
          nomcategorie: 'Vêtements',
          imagecategorie: 'https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg',
        },
        {
          _id: '3',
          nomcategorie: 'Santé',
          imagecategorie: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2pQ47EyTXEwv2rDcRmurv9VgbqtDPrlL7Q&s',
        },
        {
          _id: '4',
          nomcategorie: 'Mécanique',
          imagecategorie: 'https://img.freepik.com/vecteurs-libre/concept-rond-outils-garage-vintage-monochrome_1284-39202.jpg?semt=ais_items_boosted&w=740',
        },
        {
          _id: '5',
          nomcategorie: 'Entraînement',
          imagecategorie: 'https://www.placedupro.com/photos/boutique/produits/zooms/11658086-1-600_10799.jpg',
        },
        {
          _id: '6',
          nomcategorie: 'Nutrition',
          imagecategorie: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xnRLdMJ5PRE57mkkmc1LGlkzdDgFbxG1ug&s',
        },
        {
          _id: '7',
          nomcategorie: 'Maison',
          imagecategorie: 'https://www.maisons-mca.com/wp-content/uploads/2024/01/les-bonnes-raisons-craquer-plan-maison-contemporaine-1.jpg',
        },
      ];

      setCategories(fakeData);
      localStorage.setItem("categories", JSON.stringify(fakeData));
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      const filtered = categories.filter(cat => cat._id !== id);
      setCategories(filtered);
      localStorage.setItem("categories", JSON.stringify(filtered));
    }
  };

  return (
    <div>
      <Link to="/categories/add">
        <button className="btn btn-success btn-sm">
          <i className="fa fa-plus"></i> Ajouter
        </button>
      </Link>
      <h1 className="mt-3">Liste des catégories</h1>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Nom catégorie</th>
            <th>Image catégorie</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat.nomcategorie}</td>
              <td>
                <img
                  src={cat.imagecategorie}
                  width={100}
                  height={100}
                  alt={cat.nomcategorie}
                />
              </td>
              <td>
                <Link to={`/categories/edit/${cat._id}`}>
                  <button className="btn btn-warning btn-sm">
                    <i className="fa-sharp fa-regular fa-pen-to-square"></i> Modifier
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(cat._id)}
                >
                  <i className="fa-solid fa-delete-left"></i> Supprimer
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
