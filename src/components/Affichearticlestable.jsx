import React from 'react';

const Affichearticlestable = ({ articles }) => {
  return (
    <div>
      <h1>List article</h1>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Marque</th>
            <th>Designation</th>
            <th>Stock</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.reference}</td>
              <td>{article.marque}</td>
              <td>{article.designation}</td>
              <td>{article.qtestock}</td>
              <td>{article.prix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Affichearticlestable;
