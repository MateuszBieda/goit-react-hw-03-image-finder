import { Component } from 'react';
import css from './ImageGallery.module.css'
import axios from "axios";
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';




axios.defaults.baseURL = "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12";


export class ImageGallery extends Component {
  render() {
    return (
        <ul className={css.gallery}>
        <ImageGalleryItem/>
      </ul>
    );
  }
}