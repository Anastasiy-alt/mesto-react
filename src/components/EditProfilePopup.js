import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser, button}) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleNameChange(name) {
        setName(name.target.value);
    }
    function handleDescriptionChange(description) {
        setDescription(description.target.value);
    }

    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateUser({
          name: name,
          about: description,
        });
        onClose();
      }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="edit" title="Редактировать профиль" onSubmit={handleSubmit}>
           <fieldset className="popup__input" >
            <label className="popup__label">
                <input type="text"
                    className="popup__item popup__item_input_name"
                    name="name" maxLength="40"
                    minLength="2"
                    required
                    id="name"
                    placeholder="Имя"
                    value={name}
                    onChange={handleNameChange} />
                <span className="popup__input-error name-error"></span>
            </label>
            <label className="popup__label">
                <input type="text"
                    className="popup__item popup__item_input_info"
                    name="info"
                    maxLength="200"
                    minLength="2"
                    required
                    id="info"
                    placeholder="Информация"
                    value={description}
                    onChange={handleDescriptionChange} />
                <span className="popup__input-error info-error"></span>
            </label>
            <button className={`button popup__button popup__button_for_edit`} type="submit">{button || 'Сохранить'}</button>

                    </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;