import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({ name, link }, container) {
        super(container);
        this._openPopupImage = document.querySelector('.popup__image');
        this._popupImageCaption = document.querySelector('.popup__image-caption');
        this._name = name;
        this._link = link;
    };

    open() {
        this._openPopupImage.src = this._link;
        this._popupImageCaption.textContent = this._name;
        super.open();
    };
}