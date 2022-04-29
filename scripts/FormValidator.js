export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    };

    _showInputError = (formElement, inputElement, config) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.errorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._config.inputErrorClass);
    };

    _hideInputError = (formElement, inputElement, config) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`); 
        inputElement.classList.remove(this._config.errorClass);
        errorElement.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement, formElement, config) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, this._config);
        } else {
            this._hideInputError(formElement, inputElement, this._config);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
         return !inputElement.validity.valid;
        })
    };

    

    _toggleButtonState = (inputList, buttonElement, config) => {
        if (this._hasInvalidInput(this._inputList)) {
          this._buttonElement.classList.add(this._config.inactiveButtonClass);
          this._buttonElement.setAttribute('disabled', 'disabled');
          
       } else {
          this._buttonElement.classList.remove(this._config.inactiveButtonClass);
          this._buttonElement.removeAttribute('disabled', 'disabled');
          
        }
    };

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
  
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
      }

    enableValidation() {
        this._setEventListeners();
    
    };
}