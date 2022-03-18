const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#editProfile');
const formElement = document.querySelector('#profileForm');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = popup.querySelector('#profileClose');
const submitButton = popup.querySelector('.popup__save');
const authorName = document.querySelector('.profile__title');
const authorJob = document.querySelector('.profile__subtitle');
const popupAuthorName = popup.querySelector('.popup__input_type_name');
const popupAuthorJob = popup.querySelector('.popup__input_type_description');
const popupCardName = popup.querySelector('.popup__input_type_cardname');
const popupCardLink = popup.querySelector('.popup__input_type_cardlink');
const cardPopup = document.querySelector('#addCard');
const openCardPopup = document.querySelector('.profile__add-button');
const closeCardPopup = document.querySelector('#cardClose');
//const cardName = document.querySelector('.element__title');
//const cardLink = document.querySelector('.element__image');





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

  const CardsContainer = document.querySelector('.elements');
  const CardForm = document.querySelector('#cardForm');

  //фунция открытия и закрытия попапа добавления карточки

  function toggleCardPopup() {
    cardPopup.classList.toggle('popup_opened');
  }

  openCardPopup.addEventListener('click', toggleCardPopup);
  closeCardPopup.addEventListener('click', toggleCardPopup);


  //функция создания карточки

  function createCard(name, link) {
    const element = document.querySelector('.elements-template').content.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');

    elementTitle.textContent = name;
    elementImage.src = link;
    elementImage.alt = "Фотография места " + name;
    
    return element;

  }

  function addCard(container, cardElement) {
    container.prepend(cardElement);
  }

  initialCards.forEach(item => {
    addCard(CardsContainer, createCard(item.name, item.link));
  });

  CardForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const newCardName = CardForm.querySelector('.popup__input_type_cardname').value;
    const newCardLink = CardForm.querySelector('.popup__input_type_cardlink').value;

    addCard(CardsContainer, createCard(newCardName, newCardLink));

    toggleCardPopup();
    CardForm.reset();
  });
  
  //функция создания карточек из массива

//function createCard(initialCards) {
//      const card = document.querySelector('.element-template').content.querySelector('.element').cloneNode(true);
//      card.querySelector('.element__title').textContent = initialCards.name;
//      card.querySelector('.element__image').src = initialCards.link;
//      CardsContainer.append(card);
//      return card;
//}

//function renderCard (initialCards, CardsContainer) {
//    const newCard = createCard({name: popupCardName.value, 
//      link: popupCardLink.value});
//    CardsContainer.prepend(newCard);
//}

//function AddCard(event) {
//  event.preventDefault();
 // renderCard(initialCards, CardsContainer);
  

 // toggleCardPopup();
 // event.currentTarget.reset();
//}
//CardForm.addEventListener('submit', AddCard);
//initialCards.forEach(card => { createCard(card); });



