import { Component } from 'react';
import api from '../services/api.js';
import { Searchbar } from './Searchbar/Searchbar.jsx';
// import { Button } from './Button/Button.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';

// import { Loader } from './Loader/Loader.jsx';
// import { Modal } from './Modal/Modal.jsx';

export class App extends Component {
  state = {
    images: {},
  };

  async componentDidMount(searchQuery, page) {
    try {
      const images = api.fetchImagesWithQuery('cat');
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        {console.log({ images })}
        <Searchbar />
        <ImageGallery />
        {/* 
     
      <Modal/>
      <Button/>
      <Loader/> */}
      </div>
    );
  }
}
