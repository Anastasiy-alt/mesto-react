import {useEffect, useState, Fragment, useContext} from 'react';
import Card from "./Card";
import api from "../utils/Api"
import { CurrentUserContext } from '../context/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteClick, onUserInfo}) {

    // const [userName, setUserName] = useState("");
    // const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    const currentUser = useContext(CurrentUserContext);
    // useEffect(() => {
    //     api.getUserInfo()
    //         .then((userData) => {
    //             setUserName(userData.name);
    //             setUserDescription(userData.about);
    //             setUserAvatar(userData.avatar);
    //         })
    //         .catch((error) => {
    //             console.log(`Ошибка: ${error}`);
    //         })
    // });

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
                    <img alt="Фото профиля." src={currentUser.avatar} className="profile__avatar" />
                </div>
                <div className="profile__info-block">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__info">{currentUser.about}</p>
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