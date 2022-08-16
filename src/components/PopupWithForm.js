function PopupWithForm({name, title, button, isOpen, onClose, popupDelete, popupAvatar, children}) {

    return (
        <div className={`popup popup_for_${name} ${isOpen && "popup_opened"}`}>
            <div className={`popup__container ${popupDelete && "popup__container_for_delete"} ${popupAvatar && "popup__container_for_avatar"}`}>
                <button className={`button popup__close popup__close_for_${name}`} type="button" onClick={onClose}></button>
                <h3 className={`popup__heading ${popupDelete && "popup__heading_for_delete"} ${popupAvatar && "popup__heading_for_avatar"}`}>{title}</h3>
                <form className="popup__form" name={`form-${name}`} noValidate>

                    <fieldset className="popup__input">
                        {children}
                        <button className={`button popup__button popup__button_for_${name}`} type="submit">{button || 'Сохранить'}</button>

                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;