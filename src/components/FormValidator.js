export default class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
    this._buttonElement = this._form.querySelector(this._data.submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._data.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove(this._data.inputErrorClass);
    inputElement.classList.remove(this._data.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {

    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._data.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._data.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true);
    }
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputELement) => {
      this._hideInputError(inputELement);
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  resetError() {
  
    const inputErrors = Array.from(document.querySelectorAll(inputErrorClass));
    inputErrors.forEach((inputError) => {
    inputError.classList.remove(inputErrorClass);
    inputError.textContent = '';
    });

    const errorClasses = Array.from(document.querySelectorAll(errorClass));
    errorClasses.forEach((errorClass) => {
    errorClass.classList.remove(errorClass);
    });
}; 

  enableValidation() {
    this._inputList = Array.from(this._form.querySelectorAll(this._data.inputSelector));
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}