import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Insertcategories from './Insertcategories';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// Mock pour useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: () => mockedUsedNavigate,
  };
});

beforeEach(() => {
  localStorage.clear();
  mockedUsedNavigate.mockReset();
});

test('remplit le formulaire et enregistre une nouvelle catégorie', () => {
  render(
    <MemoryRouter initialEntries={['/insertcategorie']}>
      <Routes>
        <Route path="/insertcategorie" element={<Insertcategories />} />
      </Routes>
    </MemoryRouter>
  );

  // Remplir les champs
  fireEvent.change(screen.getByLabelText(/Nom catégorie/i), {
    target: { value: 'Nouvelle Catégorie' },
  });
  fireEvent.change(screen.getByLabelText(/Image catégorie/i), {
    target: { value: 'https://image.com/cat.jpg' },
  });

  // Cliquer sur "Enregistrer"
  fireEvent.click(screen.getByRole('button', { name: /Enregistrer/i }));

  // Vérifier que la catégorie est bien enregistrée dans localStorage
  const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
  expect(savedCategories.length).toBe(1);
  expect(savedCategories[0].nomcategorie).toBe('Nouvelle Catégorie');
  expect(savedCategories[0].imagecategorie).toBe('https://image.com/cat.jpg');
  expect(savedCategories[0]._id).toBeDefined();

  // Vérifier la redirection
  expect(mockedUsedNavigate).toHaveBeenCalledWith('/categories');
});
