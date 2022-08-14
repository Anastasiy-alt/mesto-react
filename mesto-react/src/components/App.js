import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
    return (
        <div className="page">

            <Header />
            <Main />
            <Card />
            <Footer />

            <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить">
                <label className="popup__label">
                    <input type="text" className="popup__item popup__item_input_name" name="name" maxlength="40"
                        minlength="2" required id="name" placeholder="Имя" />
                    <span className="popup__input-error name-error"></span>
                </label>
                <label className="popup__label">
                    <input type="text" className="popup__item popup__item_input_info" name="info" maxlength="200"
                        minlength="2" required id="info" placeholder="Информация" />
                    <span className="popup__input-error info-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="add" title="Новое место" button="Создать">
                <label className="popup__label">
                    <input type="text" className="popup__item popup__item_input_name" name="name" maxlength="40"
                        minlength="2" required id="name" placeholder="Имя" />
                    <span className="popup__input-error name-error"></span>
                </label>
                <label className="popup__label">
                    <input type="text" className="popup__item popup__item_input_info" name="info" maxlength="200"
                        minlength="2" required id="info" placeholder="Информация" />
                    <span className="popup__input-error info-error"></span>
                </label>
            </PopupWithForm>

            <PopupWithForm name="delete" title="Вы уверены?" button="Да" />

            <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить">
                <label className="popup__label">
                    <input type="url" className="popup__item popup__item_input_link-avatar" name="avatar"
                        placeholder="Ссылка на аватар" required id="avatar" />
                    <span className="popup__input-error avatar-error"></span>
                </label>
            </PopupWithForm>

<ImagePopup />

            <template className="img-template">
                <article className="element">
                    <button className="element__delete button" type="button"></button>
                    <img className="element__img" />
                    <div className="element__title">
                        <h2 className="element__name"></h2>
                        <div className="element__like-container">
                            <button className="element__like button" type="button"></button>
                            <p className="element__like-counter"></p>
                        </div>
                    </div>
                </article>
            </template>

            {/* <div className="popup popup_for_edit">
                <div className="popup__container">
                    <button className="button popup__close popup__close_for_edit" type="button"></button>
                    <h3 className="popup__heading">Редактировать профиль</h3>
                    <form className="popup__form" name="form-edit" novalidate>
                        <fieldset className="popup__input">
                            <label className="popup__label">
                                <input type="text" className="popup__item popup__item_input_name" name="name" maxlength="40"
                                    minlength="2" required id="name" placeholder="Имя" />
                                <span className="popup__input-error name-error"></span>
                            </label>
                            <label className="popup__label">
                                <input type="text" className="popup__item popup__item_input_info" name="info" maxlength="200"
                                    minlength="2" required id="info" placeholder="Информация" />
                                <span className="popup__input-error info-error"></span>
                            </label>
                            <button className="button popup__button popup__button_for_edit" type="submit">Сохранить</button>
                        </fieldset>
                    </form>
                </div>
            </div> */}

            {/* <div className="popup popup_for_add">
                <div className="popup__container">
                    <button className="button popup__close popup__close_for_add" type="button"></button>
                    <h3 className="popup__heading">Новое место</h3>
                    <form className="popup__form" name="form-add" novalidate>
                        <fieldset className="popup__input">
                            <label className="popup__label">
                                <input type="text" className="popup__item popup__item_input_name" name="name" placeholder="Название"
                                    maxlength="30" minlength="2" required id="title" />
                                <span className="popup__input-error title-error"></span>
                            </label>
                            <label className="popup__label">
                                <input type="url" className="popup__item popup__item_input_info" name="link"
                                    placeholder="Ссылка на картинку" required id="link" />
                                <span className="popup__input-error link-error"></span>
                            </label>
                            <button className="button popup__button popup__button_for_add" type="submit">Создать</button>
                        </fieldset>
                    </form>
                </div>
            </div> */}



            {/* <div className="popup popup_for_delete">
                <div className="popup__container popup__container_for_delete">
                    <button className="button popup__close popup__close_for_delete" type="button"></button>
                    <h3 className="popup__heading popup__heading_for_delete">Вы уверены?</h3>
                    <form className="popup__form" name="form-delete" novalidate>
                        <fieldset className="popup__input">
                            <button className="button popup__button popup__button_for_delete" type="submit">Да</button>
                        </fieldset>
                    </form>
                </div>
            </div> */}

            {/* <div className="popup popup_for_avatar">
                <div className="popup__container popup__container_for_avatar">
                    <button className="button popup__close popup__close_for_avatar" type="button"></button>
                    <h3 className="popup__heading popup__heading_for_avatar">Обновить аватар</h3>
                    <form className="popup__form" name="form-avatar" novalidate>
                        <fieldset className="popup__input">
                            <label className="popup__label">
                                <input type="url" className="popup__item popup__item_input_link-avatar" name="avatar"
                                    placeholder="Ссылка на аватар" required id="avatar" />
                                <span className="popup__input-error avatar-error"></span>
                            </label>
                            <button className="button popup__button popup__button_for_avatar" type="submit">Сохранить</button>
                        </fieldset>
                    </form>
                </div>
            </div> */}


        </div>
    );
}


export default App;
