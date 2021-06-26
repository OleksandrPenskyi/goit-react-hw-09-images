import React from 'react';
import { useSelector } from 'react-redux';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';
// import Loader from './components/Loader';
import Modal from './components/Modal';

import { getIsModalOpen } from './redux/pics/pictures-selectors';

export default function App() {
  const isModalOpen = useSelector(getIsModalOpen);

  return (
    <>
      <Searchbar />
      <ImageGallery />

      {isModalOpen && <Modal />}
    </>
  );
}

// class App extends Component {
//   state = {
//     pictures: [],
//     // searchQuery: '',
//     currentPage: 1,
//     isLoading: false,
//     // isVisibleModal: false,
//     // largeImageURL: '',
//   };

// componentDidUpdate(prevProps, prevState) {
//   const { searchQuery, currentPage } = this.state;

//   if (prevState.searchQuery !== searchQuery) {
//     // console.log('Стейт обновился');
//     // console.log('Стейт:', searchQuery);
//     this.fetchData(searchQuery, currentPage);
//   }
// }

// fetchData = (searchQuery, currentPage) => {
//   api
//     .getPics(searchQuery, currentPage)
//     .then(data => {
//       this.setState(prevState => ({
//         pictures: [...prevState.pictures, ...data],
//         currentPage: prevState.currentPage + 1,
//         isLoading: false,
//       }));
//     })
//     .then(() => {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     });
// };

// btnClick = () => {
//   const { searchQuery, currentPage } = this.state;

//   this.setState({
//     isLoading: true,
//   });

//   this.fetchData(searchQuery, currentPage);
// };

// handleSubmit = searchValue => {
//   const { searchQuery } = this.state;

//   // проверка на ввод того же значения инпута
//   if (searchValue !== searchQuery) {
//     this.setState({
//       pictures: [],
//       searchQuery: searchValue,
//       currentPage: 1,
//       isLoading: true,
//     });
//   }
// };

// handleClickOnImg = link => {
//   this.setState({ largeImageURL: link, isVisibleModal: true });
// };

// handleCloseModal = () => {
//   this.setState({
//     isVisibleModal: false,
//     largeImageURL: '',
//   });
// };

// render() {
// const { pictures, isLoading, isVisibleModal, largeImageURL } = this.state;
// const isVisibleBtn = pictures.length > 0 && !isLoading;

//     return (
//       <>
//         <Searchbar />
//         <ImageGallery />

//         {/* {pictures.length > 0 && (
//           <ImageGallery
//           // pictures={pictures}
//           // onImgClick={this.handleClickOnImg}
//           />
//         )} */}

//         {/* {isLoading && <Loader />}
//         {isVisibleBtn && <Button onBtnClick={this.btnClick} />}

//         {isVisibleModal && (
//           <Modal
//             largeImageURL={largeImageURL}
//             onCloseModal={this.handleCloseModal}
//           />
//         )} */}
//       </>
//     );
//   }
// }

// export default App;
