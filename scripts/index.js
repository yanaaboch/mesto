const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('.popup__close');
const submitButton = popup.querySelector('.popup__save');
const authorName = document.querySelector('.profile__title');
const authorJob = document.querySelector('.profile__subtitle');
const popupAuthorName = popup.querySelector('.popup__input_type_name');
const popupAuthorJob = popup.querySelector('.popup__input_type_description');




function togglePopup() {
    popup.classList.toggle('popup_opened');
    let contains = popup.classList.contains('popup_opened');
    if (contains) {
        popupAuthorName.value = authorName.textContent;
        popupAuthorJob.value = authorJob.textContent;
    }
}

openPopup.addEventListener('click', togglePopup);

closePopup.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    authorName.textContent = popupAuthorName.value;
    authorJob.textContent = popupAuthorJob.value;
    togglePopup();
}

submitButton.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
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

  const CardList = document.querySelector('.elements');

  function renderCard(initialCards) {
      const card = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);

      card.querySelector('.element__title').textContent = initialCards.name;
      card.querySelector('.element__image').src = initialCards.link;
    CardList.append(card);
  }

  initialCards.map(renderCard);


