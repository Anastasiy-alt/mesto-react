import React from "react";

function PopupWithForm(props) {

    return (
        <div className={`popup popup_for_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className={`popup__container ${props.popupDelete ? "popup__container_for_delete" : ""} ${props.popupAvatar ? "popup__container_for_avatar" : ""}`}>
                <button className={`button popup__close popup__close_for_${props.name}`} type="button" onClick={props.onClose}></button>
                <h3 className={`popup__heading ${props.popupDelete ? "popup__heading_for_delete" : ""} ${props.popupAvatar ? "popup__heading_for_avatar" : ""}`}>{props.title}</h3>
                <form className="popup__form" name={`form-${props.name}`} noValidate>

                    <fieldset className="popup__input">
                        {props.children}
                        <button className={`button popup__button popup__button_for_${props.name}`} type="submit">{props.button}</button>

                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;