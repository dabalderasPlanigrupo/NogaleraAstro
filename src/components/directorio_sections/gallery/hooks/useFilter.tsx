import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { type Store } from 'src/data/stores';

export const useFilter = (stores: Store[]) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('tiendas');

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const fuseOptions = useMemo(
    () => ({
      includeScore: true,
      threshold: 0.4,
      keys: ['title'],
    }),
    []
  );

  const fuse = useMemo(
    () => new Fuse(stores, fuseOptions),
    [stores, fuseOptions]
  );

  const filteredStores = useMemo(() => {
    if (!searchQuery && selectedCategory === 'Todos') {
      return stores;
    }

    const searchResults = searchQuery
      ? fuse.search(searchQuery)
      : stores.map((store) => ({ item: store }));

    return searchResults
      .map((result) => result.item)
      .filter(
        (store) =>
          selectedCategory === 'Todos' || store.categoria === selectedCategory
      );
  }, [searchQuery, selectedCategory, stores, fuse]);

  const handleOnFunction = () => {
    setViewMode('tiendas');
    console.log('On');
  };

  const handleOffFunction = () => {
    setViewMode('mapa');
    console.log('Off');
  };

  return {
    selectedCategory,
    searchQuery,
    viewMode,
    handleCategoryChange,
    handleSearchChange,
    filteredStores,
    handleOnFunction,
    handleOffFunction,
  };
};
