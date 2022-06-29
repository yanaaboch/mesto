import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ submitForm, container }) {
        super(container);
        this._submitForm = submitForm;
        this._formSelector = this._container.querySelector('.popup__form');
    };

    _getInputValues() {
        this._inputList = this._formSelector.querySelectorAll('.popup__input');
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    close() {
        super.close();
        this._formSelector.reset();
    };



    setEventListeners() {
        super.setEventListeners();
        this._formSelector.addEventListener('submit', this._handleSubmitForm);
    };

    _handleSubmitForm = (evt) => {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    };
};