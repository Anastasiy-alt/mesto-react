import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const [selectedCard, setSelectedCard] = React.useState({});
    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
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
        <div className="page">

            <Header />
            <Main onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onDeleteClick={handleDeletePopupClick} />
            <Footer />

            <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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

            <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} popupAvatar={true}>
                <label className="popup__label">
                    <input type="url" className="popup__item popup__item_input_link-avatar" name="avatar"
                        placeholder="Ссылка на аватар" required id="avatar" />
                    <span className="popup__input-error avatar-error"></span>
                </label>
            </PopupWithForm>

            <ImagePopup onClose={closeAllPopups} card={selectedCard} />



        </div>
    );
}

export default App;