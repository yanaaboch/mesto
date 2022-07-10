import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._openPopupImage = this._popup.querySelector('.popup__image');
        this._popupImageCaption = this._popup.querySelector('.popup__image-caption');
    };

    open ({name, link}) {
        this._openPopupImage.src = link;
        this._popupImageCaption.textContent = name;
        this._openPopupImage.alt = name;
        super.open();
    };
}