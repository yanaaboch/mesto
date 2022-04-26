import { openPopupImage, popupImageCaption, popupImage, openPopup, initialCards } from './index.js';

export default class Card {
    constructor(data, cardSelector) {
        this._image = data.link;
        this._title = data.name;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const cardElement = document.querySelector('.elements-template').content.querySelector('.element').cloneNode(true);
        return cardElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._title;
        this._element.querySelector('.element__image').src = this._image;

        return this._element;
    };

    _handleCardLike(evt) {
        evt.target.classList.toggle('element__like-button_active');
    };

    _handleCardDelete(evt) {
        evt.target.closest('.element').remove();
    };

    _handleCardOpen() {
        openPopupImage.src = this._image;
        openPopupImage.alt = this._title;
        popupImageCaption.textContent = this._title;
        openPopup(popupImage);
    };

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
            this._handleCardLike(evt);
        });
        this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            this._handleCardDelete(evt);
        });
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardOpen();
        });
    }
}



//initialCards.forEach((data) => {
//    const card = new Card(data.name, data.link);
//    const cardElement = card.generateCard();

 //   document.body.append(cardElement);
//});