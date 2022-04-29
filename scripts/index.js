
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import initialCards from './initialCards.js';
export { openPopupImage, popupImageCaption, popupImage, openPopup };

const popupProfile = document.querySelector('.popup_edit');
const profileForm = document.querySelector('#profileForm');
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#profileClose');
const submitButton = document.querySelector('.popup__save');
const authorName = document.querySelector('.profile__title');
const authorJob = document.querySelector('.profile__subtitle');
const popupAuthorName = document.querySelector('.popup__input_type_name');
const popupAuthorJob = document.querySelector('.popup__input_type_description');
const popupCardName = document.querySelector('.popup__input_type_cardname');
const popupCardLink = document.querySelector('.popup__input_type_cardlink');
const cardPopup = document.querySelector('.popup_add');
const cardOpenButton = document.querySelector('.profile__add-button');
const cardCloseButton = document.querySelector('#cardClose');
const popupImage = document.querySelector('.popup_photo');
const openPopupImage = document.querySelector('.popup__image');
const imageCloseButton = document.querySelector('#closeImage');
const popupImageCaption = document.querySelector('.popup__image-caption');
const cardsContainer = document.querySelector('.elements');
const cardForm = document.querySelector('#cardForm');
const nameInputError = document.querySelector('.name-input-error');
const jobInputError = document.querySelector('.description-input-error');
const elementTemplate = document.querySelector('.elements-template');

const enableValidationSetting = {
  inputErrorClass: 'popup__input-error_visible',
  errorClass: 'popup__input_type_error',
  inactiveButtonClass: 'popup__save_inactive',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  formSelector: '.popup__form'
};

const formValidProfile = new FormValidator(enableValidationSetting, popupProfile);
const formValidAddCard = new FormValidator(enableValidationSetting, cardPopup);

function resetError() {
  
    const inputErrors = Array.from(document.querySelectorAll('.popup__input-error_visible'));
    inputErrors.forEach((inputError) => {
    inputError.classList.remove('popup__input-error_visible');
    inputError.textContent = '';
    });

    const errorClasses = Array.from(document.querySelectorAll('.popup__input_type_error'));
    errorClasses.forEach((errorClass) => {
    errorClass.classList.remove('popup__input_type_error');
    });
};

//Нажатие на esc

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
};

function openPopup(popup) {
  document.addEventListener('keydown', closePopupOnEsc);
  popup.classList.add('popup_opened');
};

//Закрытие попапа с фотографией места

imageCloseButton.addEventListener('click', evt => {
  closePopup(popupImage);
});

// закрытие попапа с фотографией места нажатием на оверлей

popupImage.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupImage)
  }
})

//Открытие попапа редактирования профиля

profileOpenButton.addEventListener('click', evt =>{
  resetError();
  openPopup(popupProfile);
  popupAuthorName.value = authorName.textContent;
  popupAuthorJob.value = authorJob.textContent;
  submitButton.removeAttribute('disabled', 'disabled');
  submitButton.classList.remove('popup__save_inactive');
});

//Закрытие попапа редактирования профиля

profileCloseButton.addEventListener('click', evt => {
  closePopup(popupProfile);
});

// Закрытие попапа редактирования нажатием на оверлей

popupProfile.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupProfile);
  }
});


const resetSubmitButton = function() {
  popupCardName.value = ''; 
  popupCardLink.value = '';
  
  
  const submitButtonCard = cardForm.querySelector('.popup__save');
  submitButtonCard.setAttribute('disabled', true);
  submitButtonCard.classList.add('popup__save_inactive');
  
};


//Открытие попапа добавления карточки

cardOpenButton.addEventListener('click', evt => {
  resetError();
  resetSubmitButton();
  openPopup(cardPopup);
});

//Закрытие попапа добавления карточки

cardCloseButton.addEventListener('click', evt => {
  closePopup(cardPopup);
})

// Закрытие попапа добавления карточки нажатием на оверлей

cardPopup.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(cardPopup)
  }
})

//Функция сохранения данных в попапе редактирования профиля

function submitDataProfile (evt) {
    evt.preventDefault();
    authorName.textContent = popupAuthorName.value;
    authorJob.textContent = popupAuthorJob.value;
    closePopup(popupProfile);
}

  profileForm.addEventListener('submit', submitDataProfile);

  function createCard(data) {
    const card = new Card(data, '.elements-template');
    const cardElement = card.generateCard();

    return cardElement;
  };



  //функция добавления карточки в разметку

  function addCard(cardsContainer, cardElement) {
    cardsContainer.prepend(cardElement);
  }



  initialCards.forEach(card => {
    addCard(cardsContainer, createCard(card));
  });


  cardForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const data =
      {
    name: popupCardName.value,
    link: popupCardLink.value
      };
    

    addCard(cardsContainer, createCard(data));

    closePopup(cardPopup);
    cardForm.reset();
  });


  formValidProfile.enableValidation();
  formValidAddCard.enableValidation();






