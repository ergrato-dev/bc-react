// ============================================
// COMPONENTE: Catalog (Principal)
// ============================================
// Orquesta todos los componentes del catálogo

import React, { useState, useMemo } from 'react';
import { Item, Category, SortOption } from '../types';
import { items as initialItems } from '../data/items';
import { useDebounce } from '../hooks/useDebounce';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { SortSelector } from './SortSelector';
import { ItemList } from './ItemList';

/**
 * Componente principal del catálogo
 */
export const Catalog: React.FC = () => {
  // ============================================
  // ESTADOS
  // ============================================

  // Datos
  const [items, setItems] = useState<Item[]>(initialItems);

  // Estados de UI
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Estados de filtros
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  // Debounce para búsqueda
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // ============================================
  // PROCESAMIENTO DE DATOS
  // ============================================

  // TODO: Implementar filtrado, búsqueda y ordenamiento con useMemo
  const processedItems = useMemo(() => {
    let result = [...items];

    // TODO: 1. Filtrar por búsqueda
    // if (debouncedSearchTerm) {
    //   const term = debouncedSearchTerm.toLowerCase();
    //   result = result.filter((item) =>
    //     item.name.toLowerCase().includes(term)
    //   );
    // }

    // TODO: 2. Filtrar por categoría
    // if (selectedCategory !== 'all') {
    //   result = result.filter((item) => item.category === selectedCategory);
    // }

    // TODO: 3. Filtrar por disponibilidad
    // if (showOnlyAvailable) {
    //   result = result.filter((item) => item.isAvailable);
    // }

    // TODO: 4. Ordenar (sin mutar)
    // switch (sortBy) {
    //   case 'name-asc':
    //     result.sort((a, b) => a.name.localeCompare(b.name));
    //     break;
    //   case 'name-desc':
    //     result.sort((a, b) => b.name.localeCompare(a.name));
    //     break;
    //   case 'price-asc':
    //     result.sort((a, b) => a.price - b.price);
    //     break;
    //   case 'price-desc':
    //     result.sort((a, b) => b.price - a.price);
    //     break;
    //   case 'rating':
    //     result.sort((a, b) => b.rating - a.rating);
    //     break;
    // }

    return result;
  }, [items, debouncedSearchTerm, selectedCategory, showOnlyAvailable, sortBy]);

  // ============================================
  // HANDLERS
  // ============================================

  const handleDelete = (id: number): void => {
    if (window.confirm('¿Estás seguro de eliminar este elemento?')) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleView = (id: number): void => {
    const item = items.find((i) => i.id === id);
    if (item) {
      alert(`Detalles de: ${item.name}`);
    }
  };

  const clearFilters = (): void => {
    setSearchTerm('');
    setSelectedCategory('all');
    setShowOnlyAvailable(false);
    setSortBy('name-asc');
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="catalog">
      <header className="catalog-header">
        <h1>📦 Mi Catálogo</h1>
        {/* TODO: Adaptar título a tu dominio */}
      </header>

      {/* Barra de búsqueda */}
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar elementos..."
      />

      {/* Filtros y ordenamiento */}
      <div className="controls">
        <FilterPanel
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showOnlyAvailable={showOnlyAvailable}
          onAvailableChange={setShowOnlyAvailable}
          onClearFilters={clearFilters}
        />

        <SortSelector
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      {/* Contador de resultados */}
      <p className="results-count">
        Mostrando {processedItems.length} de {items.length} elementos
        {debouncedSearchTerm && ` para "${debouncedSearchTerm}"`}
      </p>

      {/* Lista de elementos */}
      <ItemList
        items={processedItems}
        isLoading={isLoading}
        error={error}
        onDelete={handleDelete}
        onView={handleView}
        onClearFilters={clearFilters}
      />
    </div>
  );
};

export default Catalog;
