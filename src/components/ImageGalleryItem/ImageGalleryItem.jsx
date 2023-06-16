
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({images }) => {
  const { webformatURL, id } = images;
  return (
    <li className={css.image}>
      <img src={webformatURL} alt={id} />
    </li>
  );
};


ImageGalleryItem.propTypes = {
  images: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),

};
