import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import api from '../utils/Api';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import '../index.css';


function App() {

    const [currentUser, setCurrentUser] = useState({});

    const handleUserInfo = (userInfo) => {
        setCurrentUser(userInfo);
    }

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    })

    const handleUpdateUser = (userInfo) => {
        api.setUserInfo(userInfo)
          .then((data) => {
            setCurrentUser(data);
            closeAllPopups();
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          })
      };

      const handleUpdateAvatar = (avatar) => {
        api.setUserAvatar(avatar)
          .then((data) => {
            setCurrentUser(data);
            closeAllPopups();
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
          })
      };
    


    const [cards, setCards] = useState([]);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    const handleCardClick = (card) => {
        setSelectedCard(card);
    }
    const handleDeletePopupClick = () => {
        setIsDeletePopupOpen(true);
    }
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsDeletePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">

                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onDeleteClick={handleDeletePopupClick}
                    onUserInfo={handleUserInfo} />
                <Footer />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser} />

                <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input type="text" className="popup__item popup__item_input_name" name="name" maxLength="40"
                            minLength="2" required id="name" placeholder="Имя" />
                        <span className="popup__input-error name-error"></span>
                    </label>
                    <label className="popup__label">
                        <input type="text" className="popup__item popup__item_input_info" name="info" maxLength="200"
                            minLength="2" required id="info" placeholder="Информация" />
                        <span className="popup__input-error info-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="delete" title="Вы уверены?" button="Да" onClose={closeAllPopups} isOpen={isDeletePopupOpen} popupDelete={true} />

                <EditAvatarPopup 
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar} />

                <ImagePopup
                onClose={closeAllPopups}
                card={selectedCard} />

            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;