import {useEffect, useState, Fragment} from 'react';
import Card from "./Card";
import api from "../utils/Api"

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteClick}) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    });

    useEffect(() => {
        api.getInitialCards()
            .then((cardData) => {
                setCards(cardData);
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    })


    return (
        <Fragment>
            <section className="profile">
                <div className="profile__avatar-cover">
                    <button className="profile__cover-hover" type="button" onClick={onEditAvatar}></button>
                    <img alt="Фото профиля." src={userAvatar} className="profile__avatar" />
                </div>
                <div className="profile__info-block">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__info">{userDescription}</p>
                </div>
                <button className="profile__add-button button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick} deleteCardClick={onDeleteClick} />
                ))}

            </section>
        </Fragment>
    )

};

export default Main;