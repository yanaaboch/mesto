import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ submitForm, popupSelector }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    close() {
        super.close();
        this._popupForm.reset();
    };



    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._handleSubmitForm);
    };

    _handleSubmitForm = (evt) => {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
        this.close();
    };
};