import React from "react";
import Card from "./Card";
import api from "../utils/Api"

function Main(props) {

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
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

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardData) => {
                setCards(cardData);
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            })
    })


    return (
        <React.Fragment>
            <section className="profile">
                <div className="profile__avatar-cover">
                    <button className="profile__cover-hover" type="button" onClick={props.onEditAvatar}></button>
                    <img alt="Фото профиля." src={userAvatar} className="profile__avatar" />
                </div>
                <div className="profile__info-block">
                    <div className="profile__title">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button button" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__info">{userDescription}</p>
                </div>
                <button className="profile__add-button button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} openCardClick={props.onCardClick} deleteCardClick={props.onDeleteClick} />
                ))}

            </section>
        </React.Fragment>
    )

};

export default Main;