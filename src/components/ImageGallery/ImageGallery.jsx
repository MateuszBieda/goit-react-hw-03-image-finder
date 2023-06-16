
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

export const ImageGallery = ({ images }) => {
  return (
    
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} images={image} />
      ))}
    </ul>
  );
};

