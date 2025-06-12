import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Editcategories from './Editcategories';

// Fonction pour mocker localStorage avec une catégorie de test
const setupLocalStorage = () => {
  const mockCategories = [
    {
      _id: '1',
      nomcategorie: 'Catégorie Test',
      imagecategorie: 'https://example.com/image.jpg',
    }
  ];
  localStorage.setItem('categories', JSON.stringify(mockCategories));
};

const renderWithRouter = (ui, { route = '/categories/edit/1' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/categories/edit/:id" element={ui} />
        <Route path="/categories" element={<div>Liste catégories</div>} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Editcategories Component', () => {
  beforeEach(() => {
    setupLocalStorage();
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('remplit le formulaire avec les données existantes et modifie la catégorie', () => {
    renderWithRouter(<Editcategories />);

    // Vérifie que les champs sont préremplis
    expect(screen.getByDisplayValue('Catégorie Test')).toBeInTheDocument();
    expect(screen.getByDisplayValue('https://example.com/image.jpg')).toBeInTheDocument();

    // Modifie les valeurs du formulaire
    fireEvent.change(screen.getByLabelText(/Nom catégorie/i), {
      target: { value: 'Catégorie Modifiée' }
    });
    fireEvent.change(screen.getByLabelText(/Image catégorie/i), {
      target: { value: 'https://modifiée.com/image.jpg' }
    });

    // Clique sur "Modifier"
    fireEvent.click(screen.getByRole('button', { name: /Modifier/i }));

    // Vérifie navigation
    expect(screen.getByText(/Liste catégories/i)).toBeInTheDocument();

    // Vérifie mise à jour dans le localStorage
    const updated = JSON.parse(localStorage.getItem('categories'));
    expect(updated[0].nomcategorie).toBe('Catégorie Modifiée');
    expect(updated[0].imagecategorie).toBe('https://modifiée.com/image.jpg');
  });

  test('redirige si la catégorie est introuvable', () => {
    // On vide les catégories pour simuler une catégorie manquante
    localStorage.setItem('categories', JSON.stringify([]));
    window.alert = jest.fn(); // mock l'alerte

    renderWithRouter(<Editcategories />, { route: '/categories/edit/99' });

    // L'utilisateur est redirigé
    expect(screen.getByText(/Liste catégories/i)).toBeInTheDocument();
    expect(window.alert).toHaveBeenCalledWith('Catégorie non trouvée !');
  });
});
