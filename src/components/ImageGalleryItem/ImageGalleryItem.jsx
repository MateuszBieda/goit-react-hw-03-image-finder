import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    id: '',
    webformatURL: '',
    largeImageURL: '',
  };

  render() {
    return (
      <li className={css.image}>
        <img src="" alt="" />
      </li>
    );
  }
}
