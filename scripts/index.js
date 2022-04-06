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
const NameInputError = document.querySelector('.name-input-error');
const JobInputError = document.querySelector('.description-input-error');
const elementTemplate = document.querySelector('.elements-template');


function resetError() {
  popupAuthorName.classList.remove('popup__input-error');
  popupAuthorJob.classList.remove('popup__input-error');
  NameInputError.classList.remove('popup__input-error_active');
  NameInputError.textContent = '';
  JobInputError.classList.remove('popup__input-error_active');
  JobInputError.textContent = '';
}

//Нажатие на esc

function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
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
  openPopup(popupProfile);
  popupAuthorName.value = authorName.textContent;
  popupAuthorJob.value = authorJob.textContent;
  submitButton.removeAttribute('disabled', 'disabled');
  submitButton.classList.remove('popup__save_inactive');
});

//Закрытие попапа редактирования профиля

profileCloseButton.addEventListener('click', evt => {
  closePopup(popupProfile);
  resetError(profileCloseButton);
});

// Закрытие попапа редактирования нажатием на оверлей

popupProfile.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(popupProfile)
  }
})

//Открытие попапа добавления карточки

cardOpenButton.addEventListener('click', evt => {
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

function submitData (evt) {
    evt.preventDefault();
    authorName.textContent = popupAuthorName.value;
    authorJob.textContent = popupAuthorJob.value;
    closePopup(popupProfile);
}

profileForm.addEventListener('submit', submitData);

  //функция создания карточки

  function createCard(name, link) {
    const element = elementTemplate.content.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');

    elementTitle.textContent = name;
    elementImage.src = link;
    elementImage.alt = "Фотография места " + name;

    element.querySelector('.element__like-button').addEventListener('click', evt => {
      evt.target.classList.toggle('element__like-button_active');
    });

    element.querySelector('.element__delete-button').addEventListener('click', evt => {
      evt.target.closest('.element').remove();
    });

    element.querySelector('.element__image').addEventListener('click', () => {
      openPopupImage.src = link;
      openPopupImage.alt = name;
      popupImageCaption.textContent = name;
      openPopup(popupImage);
    });
    
    return element;

  }

  //функция добавления карточки в разметку

  function addCard(container, cardElement) {
    container.prepend(cardElement);
  }

  initialCards.forEach(item => {
    addCard(cardsContainer, createCard(item.name, item.link));
  });

  cardForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const newCardName = popupCardName.value;
    const newCardLink = popupCardLink.value;

    addCard(cardsContainer, createCard(newCardName, newCardLink));

    closePopup(cardPopup);
    cardForm.reset();
  });





