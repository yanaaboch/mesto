
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  popupProfile,
  profileForm,
  profileOpenButton,
  profileCloseButton,
  submitButton,
  authorName,
  authorJob,
  popupAuthorName,
  popupAuthorJob,
  popupCardName,
  popupCardLink,
  cardPopup,
  cardOpenButton,
  cardCloseButton,
  popupImage,
  openPopupImage,
  imageCloseButton,
  popupImageCaption,
  cardsContainer,
  cardForm,
  nameInputError,
  jobInputError,
  elementTemplate
} from '../utils/constants.js';

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
  





