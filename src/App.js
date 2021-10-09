import './index.css';
import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './components/ImageGallery/ImageGallery';
import * as api from './components/Api/api';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';


export default class App extends Component{
    state = {
    images: [],
    pageNumber: 1,
    search: '',
    error: '',
    isLoading: false,
    isModalOpen: false,
    largeImageId: null,
    largeImage: [],
    };


  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages(false);
    }
  }

  onSearch = search => {
    this.setState({ search, images: [], pageNumber: 1 });
  };

  fetchImagesWithScroll = () => {
    this.fetchImages(true);
  };

  fetchImages = scroll => {
    this.setState({ isLoading: true });
    const { search, pageNumber } = this.state;
    api
      .fetchImages(search, pageNumber)
      .then(images => {
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        }));
        return images[0];
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      })
      .then(firstLoadedImage => {
        if (scroll) {
          const { id } = firstLoadedImage;

          const y =
            document.getElementById(id).getBoundingClientRect().top +
            window.scrollY -
            80;
          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }
      });
  };
  openModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    })
    )
  };

 
  render() {
    const { isLoading, images, isModalOpen, } = this.state;

    return (
      <div >
        <ToastContainer/>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery openModal={this.openModal} images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button fetchImages={this.fetchImagesWithScroll} />
        )}
        {isModalOpen && (
          <Modal  onClose={this.openModal} >
            <img src='' alt='' />
          </Modal>
         ) }
        
      </div>
    );
  }

}

