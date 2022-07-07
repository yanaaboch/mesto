import './index.css';
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

const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      popupImageContainer.open(name, link);
    }
  }, '.elements-template');
  const cardElement = card.generateCard();
  return cardElement;
}


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item))
}, 
}, '.elements');
cardList.renderItems();

const cardFormAdd = new PopupWithForm({
  popupSelector: '.popup_add',
    submitForm: (formData) => {
      
        formData['link'] = formData['subtitle'];
        formData['name'] = formData['title'];
         

      cardList.addItem(createCard(formData)); 
      cardFormAdd.close();
    }
});
cardFormAdd.setEventListeners();


const userInfo = new UserInfo({
  titleSelector: authorName,
  subtitleSelector: authorJob
});

const formProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  submitForm: (dataForm) => {
    userInfo.setUserInfo(dataForm);
    formProfile.close();
  }
});
formProfile.setEventListeners();

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


  formValidProfile.enableValidation();
  formValidAddCard.enableValidation();

  profileOpenButton.addEventListener('click', () => {
    const info = userInfo.getUserInfo();
    popupAuthorName.value = info.title;
    popupAuthorJob.value = info.subtitle;
    formProfile.open();
    formValidProfile.resetValidation();
    
    
    });

  cardOpenButton.addEventListener('click', () => {
    
    cardFormAdd.open();
    formValidAddCard.resetValidation();
    
  });

const popupImageContainer = new PopupWithImage('.popup_photo');
popupImageContainer.setEventListeners();
  





