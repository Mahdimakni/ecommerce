import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Listcategories from './Listcategories';
import { BrowserRouter } from 'react-router-dom';

// Fonction utilitaire pour le rendu avec React Router
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

beforeEach(() => {
  const fakeData = [
    {
      _id: '1',
      nomcategorie: 'ToDelete',
      imagecategorie: 'https://example.com/image.jpg',
    },
  ];
  localStorage.setItem("categories", JSON.stringify(fakeData));
});

afterEach(() => {
  localStorage.clear();
});

test("supprime une catégorie après confirmation", () => {
  const confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => true);

  renderWithRouter(<Listcategories />);

  const deleteButton = screen.getByRole('button', { name: /supprimer/i });
  fireEvent.click(deleteButton);

  expect(confirmSpy).toHaveBeenCalled();
  expect(screen.queryByText('ToDelete')).not.toBeInTheDocument();

  const updated = JSON.parse(localStorage.getItem("categories"));
  expect(updated).toEqual([]);

  confirmSpy.mockRestore();
});

test("n'efface pas si confirmation annulée", () => {
  const confirmSpy = jest.spyOn(window, 'confirm').mockImplementation(() => false);

  renderWithRouter(<Listcategories />);

  const deleteButton = screen.getByRole('button', { name: /supprimer/i });
  fireEvent.click(deleteButton);

  expect(confirmSpy).toHaveBeenCalled();
  expect(screen.getByText('ToDelete')).toBeInTheDocument();

  const updated = JSON.parse(localStorage.getItem("categories"));
  expect(updated.length).toBe(1);

  confirmSpy.mockRestore();
});

