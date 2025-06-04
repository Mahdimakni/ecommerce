import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Listcategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simuler des données statiques (comme une "base de données locale")
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
        nomcategorie: 'sante',
        imagecategorie: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2pQ47EyTXEwv2rDcRmurv9VgbqtDPrlL7Q&s',
      },
      
      {
        _id: '4',
        nomcategorie: 'mecanique',
        imagecategorie: 'https://img.freepik.com/vecteurs-libre/concept-rond-outils-garage-vintage-monochrome_1284-39202.jpg?semt=ais_items_boosted&w=740',
      },
      {
        _id: '5',
        nomcategorie: 'entrainement',
        imagecategorie: 'https://www.placedupro.com/photos/boutique/produits/zooms/11658086-1-600_10799.jpg',
      },
      {
        _id: '6',
        nomcategorie: 'nuttrition',
        imagecategorie: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xnRLdMJ5PRE57mkkmc1LGlkzdDgFbxG1ug&s',
      },
      {
        _id: '7',
        nomcategorie: 'Maison',
        imagecategorie: 'https://www.maisons-mca.com/wp-content/uploads/2024/01/les-bonnes-raisons-craquer-plan-maison-contemporaine-1.jpg',
      },
    ];
    setCategories(fakeData);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      // Supprimer localement (sans backend)
      const filtered = categories.filter(cat => cat._id !== id);
      setCategories(filtered);
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
