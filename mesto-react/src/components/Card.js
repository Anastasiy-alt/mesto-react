function Card() {
    return (
        <section className="elements">
    <article className="element">
            <button className="element__delete button" type="button"></button>
            <img className="element__img" src="https://images.unsplash.com/photo-1660324472966-64a5875d4126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <div className="element__title">
                <h2 className="element__name"></h2>
                <div className="element__like-container">
                    <button className="element__like button" type="button"></button>
                    <p className="element__like-counter"></p>
                </div>
            </div>
        </article>

        <article className="element">
            <button className="element__delete button" type="button"></button>
            <img className="element__img" src="https://images.unsplash.com/photo-1660324418777-bc7a50d85c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <div className="element__title">
                <h2 className="element__name"></h2>
                <div className="element__like-container">
                    <button className="element__like button" type="button"></button>
                    <p className="element__like-counter"></p>
                </div>
            </div>
        </article>

        <article className="element">
            <button className="element__delete button" type="button"></button>
            <img className="element__img" src="https://images.unsplash.com/photo-1660324455436-4d163e51dcd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            <div className="element__title">
                <h2 className="element__name"></h2>
                <div className="element__like-container">
                    <button className="element__like button" type="button"></button>
                    <p className="element__like-counter"></p>
                </div>
            </div>
        </article>
    </section>
    )
};
export default Card;