 export default class Popup {
    constructor(container) {
        this._container = container;
    };

    open() {
        this._container.classList.add('popup_opened');
    };

    close() {
        this._container.classList.remove('popup_opened');
    };

    _handleEscClose = evt => {
        if (evt.key === 'Escape') {
            this.close(this._container);
        }
    };

    _handleClickContainer = (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            this.close(this._container)
        }
    };

    setEventListeners() {
        document.addEventListener('keydown', this._handleEscClose);
        this._container.addEventListener('click', this.open(this._container));
        this._container.addEventListener('click', this._handleClickContainer);
    };
}