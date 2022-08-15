import React from "react";

function Card(props) {

    function handleClick() {
        props.openCardClick(props.card);
    }

    return (
        <article className="element">
            <button className="element__delete button" type="button" onClick={props.deleteCardClick}></button>
            <img className="element__img" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <div className="element__title">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like button" type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;