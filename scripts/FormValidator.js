//export default class FormValidator {
//constructor(data, formElement) {
//        this._data = data;
//        this._formElement = formElement;
//        this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
//        this._buttonElement = this._formElement.querySelector(this._data.submitButtonSelector);
//    };


//    _showInputError(formElement, inputElement) {
//        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
//        inputElement.classList.add(this._data.errorClass);
//        errorElement.textContent = inputElement.validationMessage;
//        errorElement.classList.add(this._data.inputErrorClass);
//    };

//    _hideInputError(formElement, inputElement) {
//        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
///        inputElement.classList.remove(this._data.errorClass);
//        errorElement.classList.remove(this._data.inputErrorClass);
//        errorElement.textContent = '';
///    };


//    resetValidation() {
//        this._toggleButtonState();
//    
//        this._inputList.forEach((inputElement) => {
//          this._hideInputError(inputElement);
//        });
//      }

//   _checkInputValidity(inputElement, formElement, config) {
//        if (!inputElement.validity.valid) {
//            this._showInputError(formElement, inputElement, this._data);
//        } else {
//            this._hideInputError(formElement, inputElement, this._data);
//        }
//    };

//    _hasInvalidInput() {
//        return this._inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
 //       })
 //   };

    

 //   _toggleButtonState = (inputList, buttonElement, config) => {
 //       if (this._hasInvalidInput(this._inputList)) {
 //         this._buttonElement.classList.add(this._data.inactiveButtonClass);
 //         this._buttonElement.setAttribute('disabled', 'disabled');
          
  //     } else {
  //        this._buttonElement.classList.remove(this._data.inactiveButtonClass);
  //        this._buttonElement.removeAttribute('disabled', 'disabled');
   //       
   //     }
   // };

  //  _setEventListeners() {
  //      this._toggleButtonState();
  //      this._inputList.forEach((inputElement) => {
  //        inputElement.addEventListener('input', () => {
  //          this._checkInputValidity(inputElement);
  //          this._toggleButtonState();
  //        });
  //      });
  
  //      this._formElement.addEventListener('submit', (evt) => {
  //        evt.preventDefault();
  //      });
  //   }

    

  //  enableValidation() {
  //    this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
  //      this._setEventListeners();

  //      this._inputList.forEach((inputElement) => {
  //        inputElement.addEventListener('input', () => {
  //          this._checkInputValidity(inputElement);
  //          this._toggleButtonState();
  //        });
  //      });
        
  //  };
//}

export default class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.classList.remove(this._data.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    this._buttonElement = this._form.querySelector(this._data.submitButtonSelector);

    if (this._hasInvalidInput(this._inputList)) {
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