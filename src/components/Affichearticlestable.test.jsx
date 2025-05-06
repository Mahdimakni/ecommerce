// src/components/Affichearticlestable.test.jsx

import React from 'react';
import '@testing-library/jest-dom'; // Import this to enable additional matchers

import { render, screen } from '@testing-library/react';
import Affichearticlestable from './Affichearticlestable';

const mockArticles = [
  {
    imageart: 'https://via.placeholder.com/100',
    reference: 'REF001',
    marque: 'Nike',
    designation: 'Chaussure',
    qtestock: 10,
    prix: 120,
  },
  {
    imageart: 'https://via.placeholder.com/100',
    reference: 'REF002',
    marque: 'Adidas',
    designation: 'T-shirt',
    qtestock: 20,
    prix: 30,
  },
];

describe('Affichearticlestable', () => {
  it('renders article table with headings and data', () => {
    render(<Affichearticlestable articles={mockArticles} />);

    // Vérifier les titres
    expect(screen.getByText(/List article/i)).toBeInTheDocument();
    expect(screen.getByText(/Reference/i)).toBeInTheDocument();
    expect(screen.getByText(/Marque/i)).toBeInTheDocument();
    expect(screen.getByText(/Designation/i)).toBeInTheDocument();
    expect(screen.getByText(/Stock/i)).toBeInTheDocument();
    expect(screen.getByText(/Prix/i)).toBeInTheDocument();

    // Vérifier la présence d'un des articles
    expect(screen.getByText('REF001')).toBeInTheDocument();
    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Chaussure')).toBeInTheDocument();
  });
});
