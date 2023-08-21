import { useState, useEffect } from 'react';

import ImageGallery from '../../components/projects/ImageFinder/ImageGallery/ImageGallery';
import Searchbar from '../../components/projects/ImageFinder/Searchbar/Searchbar';
import Modal from '../../components/projects/ImageFinder/Modal/Modal';
import Loader from '../../components/Loader/Loader.jsx';

import css from './ImageFinder.module.css';

import Notiflix from 'notiflix';

const ImageFinder = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pictureCount, setPictureCount] = useState(12);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // Functions

  const fetchData = async () => {
    try {
      const baseURL = 'https://pixabay.com/api';
      const KEY = '36858767-c9bdee91508ce121a2eb6b95d';

      const response = await fetch(
        `${baseURL}/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      if (!response.ok) {
        return new Error('Something went wrong');
      }

      const data = await response.json();
      const { hits, total, totalHits } = data;

      setImages([...images, ...hits]);
      setPictureCount(pictureCount + hits.length);
      setStatus('resolved');

      if (total === 0) {
        Notiflix.Notify.info('Sorry, there is no image found');
        return setStatus('rejected');
      }

      if (totalHits > pictureCount) {
        setIsButtonVisible(true);
      }

      if (totalHits < pictureCount) {
        setIsButtonVisible(false);
        return Notiflix.Notify.info(
          "Wow, look's like these are are all images"
        );
      }
    } catch (error) {
      console.log(error);
      setIsButtonVisible(false);
    }
  };

  /* eslint-disable */
  useEffect(() => {
    if (searchQuery === '') {
      setIsButtonVisible(false);
      setStatus('idle');
      return;
    }
    setStatus('pending');
    fetchData();
  }, [searchQuery, page]);
  /* eslint-enable */

  const handleFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) {
      return Notiflix.Notify.info(
        'You have already searched this :) Please enter something else'
      );
    }
    setSearchQuery(newSearchQuery);
    setPage(1);
    setImages([]);
    setPictureCount(12);
  };

  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        paddingTop: 40,
      }}
    >
      <h2 className={css.title}>Image Finder</h2>
      <h3 className={css.description_title}>Project details:</h3>
      <p className={css.description__name}>
        <strong>What is it? </strong>Web application for choosing a photo like
        pinterest.
      </p>
      <ul className={css.description__list}>
        <li className={css.description__item}>REST API</li>
        <li className={css.description__item}>Pagination</li>
        <li className={css.description__item}>React</li>
        <li className={css.description__item}>Responsive design</li>
      </ul>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <div className={css.errorContainer}>
          <h1 className={css.errorMessage}>
            Sorry, there are no images matching your search :&#40;
          </h1>
        </div>
      )}
      <ImageGallery
        images={images}
        pageChanger={handleLoadMoreClick}
        status={status}
        onImageClick={handleImageClick}
        isButtonVisible={isButtonVisible}
        pictureCount={pictureCount}
      />
      {showModal && (
        <Modal closeModal={toggleModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
};

export default ImageFinder;
