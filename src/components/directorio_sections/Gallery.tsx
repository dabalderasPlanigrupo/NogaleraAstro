import React from 'react';
import type { Store } from 'src/data/stores';
import ToggleButton from './gallery/ToggleButton';
import MapView from './gallery/MapView';
import SearchInput from './gallery/SearchInput';
import CategorySelect from './gallery/CategorySelect';
import GalleryView from './gallery/GalleryView';
import { useFilter } from './gallery/hooks/useFilter';

const CATEGORY_COLORS = {
  Calzado: 'bg-red-500',
  Comidas: 'bg-blue-500',
  'Electrónicos y telefonia': 'bg-[#fcc52a]',
  Entretenimiento: 'bg-[#8ea8db]',
  'Ropa y accesorios': 'bg-[#fe679a]',
  'Servicios, bancos y cajeros': 'bg-[#0eaf90]',
  'Tiendas departamentales': 'bg-[#4a08a0]',
  'Tiendas especializadas': 'bg-[#8397b0]',
  'Ópticas, salud y belleza': 'bg-[#6aff00]',
  Otros: 'bg-gray-500',
};

interface Props {
  className: string;
  stores: Store[];
}

const GaleriaDirectorio: React.FC<Props> = ({ className, stores }) => {
  const {
    selectedCategory,
    searchQuery,
    viewMode,
    handleCategoryChange,
    handleSearchChange,
    filteredStores,
    handleOnFunction,
    handleOffFunction,
  } = useFilter(stores);

  return (
    <section className={className}>
      <div className='container mx-auto p-4'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-4 gap-4'>
          <SearchInput value={searchQuery} onChange={handleSearchChange} />
          <CategorySelect
            value={selectedCategory}
            onChange={handleCategoryChange}
            categoryColors={CATEGORY_COLORS}
          />
          <ToggleButton
            labelOn='Mapa'
            labelOff='Tiendas'
            propOn='primary'
            propOff='secondary'
            onToggleOn={handleOnFunction}
            onToggleOff={handleOffFunction}
          />
        </div>

        {viewMode === 'tiendas' && (
          <GalleryView
            stores={filteredStores}
            categoryColors={CATEGORY_COLORS}
          />
        )}

        {viewMode === 'mapa' && <MapView />}
      </div>
    </section>
  );
};

export default GaleriaDirectorio;
