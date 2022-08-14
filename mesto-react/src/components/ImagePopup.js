function ImagePopup() {
   return (<div className="popup popup_for_img">
    <div className="popup__container popup__container_for_img">
        <button className="button popup__close popup__close_for_img" type="button"></button>
        <img className="popup__img" src="#" alt="#" />
        <p className="popup__info-img"></p>
    </div>
</div>)
}

export default ImagePopup;