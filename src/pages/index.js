import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import {
  popupProfile,
  profileAvatar,
  profileOpenButton,
  authorName,
  authorJob,
  popupAuthorName,
  popupAuthorJob,
  cardPopup,
  cardOpenButton,
  popupEditAvatar,
} from "../utils/constants.js";

import api from "../api/api";

let userId;

api.getInitialCards().then((data) => cardList.renderItems(data));

const cardList = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".elements"
);

const userInfo = new UserInfo({
  name: authorName,
  info: authorJob,
  avatar: profileAvatar,
});

api.getUser().then((user) => {
  userInfo.setUserInfo(user);
  userId = user._id;
});

//Функция создания карточки
const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (_) => popupImageContainer.open(data),

      handleLikeClick: (_) => card._handleCardLike(),

      handleConfirmDelete: (_) => {
        confirmDeletePopup.setSubmitAction((_) => {
          confirmDeletePopup.renderLoadingWhileDeleting(true);
          api
            .delete(data._id)
            .then((_) => {
              console.log(_);
              card._handleCardDelete();
              confirmDeletePopup.close();
            })
            .catch((err) => console.log(err))
            .finally((_) =>
              confirmDeletePopup.renderLoadingWhileDeleting(false)
            );
        });
        confirmDeletePopup.open();
      },
    },
    ".elements-template",
    api,
    userId
  );
  return card;
};

const cardFormAdd = new PopupWithForm({
  popupSelector: ".popup_add",
  submitForm: (formData) => {
    formData["link"] = formData["subtitle"];
    formData["name"] = formData["title"];

    cardFormAdd.renderLoading(true);
    api.addNewCard(formData).then((response) => {
      const card = createCard(response);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
      cardFormAdd.close();
    })
    .catch(err => console.log(err))
    .finally( _ => cardFormAdd.renderLoading(false))
  },
});
cardFormAdd.setEventListeners();

const confirmDeletePopup = new PopupWithConfirm(".popup_confirm-delete");
confirmDeletePopup.setEventListeners();

const formProfile = new PopupWithForm({
  popupSelector: ".popup_edit",
  submitForm: (dataForm) => {
    formProfile.renderLoading(true);
    api.editUser(dataForm).then((user) => {
      userInfo.setUserInfo(user);
      formProfile.renderLoading(false);
      formProfile.close();
    })
    .catch(err => console.log(err))
  },
});
formProfile.setEventListeners();

profileOpenButton.addEventListener("click", () => {
  popupAuthorName.value = authorName.textContent;
  popupAuthorJob.value = authorJob.textContent;
  formProfile.open();
  formValidProfile.resetValidation();
});

const enableValidationSetting = {
  inputErrorClass: "popup__input-error_visible",
  errorClass: "popup__input_type_error",
  inactiveButtonClass: "popup__save_inactive",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  formSelector: ".popup__form",
};

const formValidProfile = new FormValidator(
  enableValidationSetting,
  popupProfile
);
const formValidAddCard = new FormValidator(enableValidationSetting, cardPopup);
const popupAvatarEditFromValidator = new FormValidator(
  enableValidationSetting,
  popupEditAvatar
);

formValidProfile.enableValidation();
formValidAddCard.enableValidation();
popupAvatarEditFromValidator.enableValidation();

cardOpenButton.addEventListener("click", () => {
  cardFormAdd.open();
  formValidAddCard.resetValidation();
});

const popupAvatarEdit = new PopupWithForm({
  popupSelector: ".popup_avatar-edit",
  submitForm: (dataForm) => {
    popupAvatarEdit.renderLoading(true);
    api
      .editUserAvatar(dataForm)
      .then((user) => {
        userInfo.setUserAvatar(user);
        popupAvatarEdit.close();
      })
      .catch( err => console.log(err))
      .finally( _ => popupAvatarEdit.renderLoading(false));
  },
});
popupAvatarEdit.setEventListeners();

profileAvatar.addEventListener("click", (_) => {
  popupAvatarEdit.open();
  popupAvatarEditFromValidator.resetValidation();
});

const popupImageContainer = new PopupWithImage(".popup_photo");
popupImageContainer.setEventListeners();
