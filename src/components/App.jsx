import css from 'App.module.css'
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
// import { Button } from './Button/Button.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { fetchImages } from 'services/api.js';

// import { Loader } from './Loader/Loader.jsx';
// import { Modal } from './Modal/Modal.jsx';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  addFetchedImages = async (query, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const elements = await fetchImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...elements],
        isLoading: false,
      }));
      console.log(this.props);
      if (elements.length === 0) {
        alert(
          "Sorry, we can't find anything for your request. Please try again"
        );
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.addFetchedImages(this.state.query, this.state.page);
    }
  }

  // componentDidUpdate() {
  //   fetchImages()
  //     .then(response => {
  //       console.log(response.data.hits);
  //       this.setState({ images: response.data.hits });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  handleFormSubmit = query => {
    this.setState({ query: query, page: 1, images: [] });
  };

  render() {
    const { images } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        {/* 
     
      <Modal/>
      <Button/>
      <Loader/> */}
      </div>
    );
  }
}
