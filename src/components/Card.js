export default class Card {
    constructor( {data, handleCardClick}, cardSelector) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    };

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        

        return this._element;
    };

    _handleCardLike(evt) {
        evt.target.classList.toggle('element__like-button_active');
    };

    _handleCardDelete() {
        this._element.remove();
        this._element = null;
    };

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
            this._handleCardLike(evt);
        });
        this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            this._handleCardDelete(evt);
        });
        this._cardImage.addEventListener('click', () => {
           this._handleCardClick(this._name, this._link)
        });
    }
}
