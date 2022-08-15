import React from "react";

function ImagePopup(props) {
    return (
        <div className={`popup popup_for_img  ${props.card._id ? "popup_opened" : ""}`}>
            <div className="popup__container popup__container_for_img">
                <button className="button popup__close popup__close_for_img" type="button" onClick={props.onClose}></button>
                <img className="popup__img" src={props.card.link} alt={props.card.name} />
                <p className="popup__info-img">{props.card.name}</p>
            </div>
        </div>)
}

export default ImagePopup;