function Main() {
     
    return ( 

        <section className="profile">
        <div className="profile__avatar-cover">
            <button className="profile__cover-hover" type="button" onClick={handleEditAvatarClick}></button>
            <img alt="Жак-Ив Кусто." src="https://images.unsplash.com/photo-1659292482339-4fe111483d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" className="profile__avatar" />
        </div>
        <div className="profile__info-block">
            <div className="profile__title">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-button button" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__info">Исследователь океана</p>
        </div>
        <button className="profile__add-button button" type="button" onClick={handleAddPlaceClick}></button>
    </section>

    )
   
};

function handleEditAvatarClick() {
    document.querySelector('.popup_for_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
    document.querySelector('.popup_for_edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup_for_add').classList.add('popup_opened');
}


export default Main;

