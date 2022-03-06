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

formElement.addEventListener('submit', formSubmitHandler);