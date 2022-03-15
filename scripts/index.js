let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.popup-open');
let closePopup = popup.querySelector('.popup__close');
let submitButton = popup.querySelector('.popup__save');
let authorName = document.querySelector('.profile__title');
let authorJob = document.querySelector('.profile__subtitle');
let popupAuthorName = popup.querySelector('.popup__name');
let popupAuthorJob = popup.querySelector('.popup__about');
popupAuthorName.value = authorName.textContent;
popupAuthorJob.value = authorJob.textContent;

function togglePopup() {
    popup.classList.toggle('popup__opened');
}

popup.addEventListener('click', function(event) {
    if (event.target === event.currentTarget) {
        togglePopup();
    }
})

openPopup.addEventListener('click', togglePopup);

closePopup.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    authorName.textContent = popupAuthorName.value;
    authorJob.textContent = popupAuthorJob.value;
    togglePopup();
}

submitButton.addEventListener('click', formSubmitHandler);