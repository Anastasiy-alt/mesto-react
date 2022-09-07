import { CurrentUserContext } from '../context/CurrentUserContext';
import {useContext} from 'react';

function Card({card, onCardClick, deleteCardClick}) {

    function handleClick() {
        onCardClick(card);
    }
    const currentUser = useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
const cardDeleteButtonClassName = (
  `button ${isOwn && 'element__delete'}`
);

// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = `button element__like ${isLiked && 'element__like_click'}`;

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