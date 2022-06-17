
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import initialCards from './initialCards.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

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

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: (name, link) => {
        const popupImageContainer = new PopupWithImage({
          name: name,
          link: link
        }, popupImage);
        popupImageContainer.open();
        popupImageContainer.setEventListeners();
      }
    }, '.elements-template');
   const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  },
}, cardsContainer);

const cardFormAdd = new PopupWithForm({
    submitForm: (formData) => {
      formData['name'] = formData['title'];
      formData['link'] = formData['subtitle'];
      delete formData['title'];
      delete formData['subtitle'];
      cardFormAdd.close();
      const card = new Card({
        data: formData,
        handleCardClick: (name, link) => {
          const popupImageContainer = new PopupWithImage({
            name: name,
            link: link
          }, popupImage);
          popupImageContainer.open();
          popupImageContainer.setEventListeners();
        }
      }, '.elements-template');
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }, container: cardPopup
});

const userInfo = new UserInfo({
  titleContainer: authorName,
  subtitleContainer: authorJob
});

const formProfile = new PopupWithForm({
  submitForm: (formData) => {
    userInfo.setUserInfo(formData);
    formProfile.close();
  }, container: popupProfile
});

cardList.renderItems();

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

const resetError = () => {
  
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


  formValidProfile.enableValidation();
  formValidAddCard.enableValidation();

  profileOpenButton.addEventListener('click', () => {
    
    popupAuthorName.value = userInfo.getUserInfo().title;
    popupAuthorJob.value = userInfo.getUserInfo().subtitle;
    formProfile.open();
    formProfile.setEventListeners();
    resetError();
    formValidProfile.resetValidation();
    
    
    });

  cardOpenButton.addEventListener('click', () => {
    
    cardFormAdd.open();
    cardFormAdd.setEventListeners();
    resetError();
    formValidAddCard.resetValidation();
    
  });
  





