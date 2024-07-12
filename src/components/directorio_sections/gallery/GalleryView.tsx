import type { Store } from 'src/data/stores';
import GalleryItem from './GalleryItem';

interface GalleryGridProps {
  stores: Store[];
  categoryColors: Record<string, string>;
}

const GalleryView: React.FC<GalleryGridProps> = ({
  stores,
  categoryColors,
}) => {
  return (
    <div
      className='grid grid-cols-1 gap-px
                 sm:grid-cols-2
                 md:grid-cols-3
                 lg:grid-cols-4
                 xl:grid-cols-5'
    >
      {stores.map((store) => (
        <GalleryItem
          color={categoryColors[store.categoria] || 'bg-gray-500'}
          {...store}
          key={store.imagePath || store.title}
        />
      ))}
    </div>
  );
};

export default GalleryView;
