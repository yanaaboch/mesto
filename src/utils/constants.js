export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

export const popupProfile = document.querySelector('.popup_edit');
export const popupEditAvatar = document.querySelector('.popup_avatar-edit');
export const profileForm = document.querySelector('#profileForm');
export const profileOpenButton = document.querySelector('.profile__edit-button');
export const profileCloseButton = document.querySelector('#profileClose');
export const submitButton = document.querySelector('.popup__save');
export const profileAvatar = document.querySelector('.profile__avatar');
export const authorName = document.querySelector('.profile__title');
export const authorJob = document.querySelector('.profile__subtitle');
export const popupAuthorName = document.querySelector('.popup__input_type_name');
export const popupAuthorJob = document.querySelector('.popup__input_type_description');
export const popupCardName = document.querySelector('.popup__input_type_cardname');
export const popupCardLink = document.querySelector('.popup__input_type_cardlink');
export const cardPopup = document.querySelector('.popup_add');
export const cardPopupRemove = document.querySelector('.popup_confirm-delete');
export const cardOpenButton = document.querySelector('.profile__add-button');
export const cardCloseButton = document.querySelector('#cardClose');
export const popupImage = document.querySelector('.popup_photo');
export const openPopupImage = document.querySelector('.popup__image');
export const imageCloseButton = document.querySelector('#closeImage');
export const popupImageCaption = document.querySelector('.popup__image-caption');
export const cardsContainer = document.querySelector('.elements');
export const cardForm = document.querySelector('#cardForm');
export const nameInputError = document.querySelector('.name-input-error');
export const jobInputError = document.querySelector('.description-input-error');
export const elementTemplate = document.querySelector('.elements-template');