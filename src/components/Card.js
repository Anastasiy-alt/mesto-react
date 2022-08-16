import React from "react";

function Card({card, onCardClick, deleteCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
            <button className="element__delete button" type="button" onClick={deleteCardClick}></button>
            <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="element__title">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like button" type="button"></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;