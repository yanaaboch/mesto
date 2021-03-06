
export default class Card {
  constructor( {data, handleCardClick, handleLikeClick, handleConfirmDelete}, cardSelector, api, userId) {

      this._name = data.name;
      this._link = data.link;
      this._likes = data.likes;

      this._handleLikeClick = handleLikeClick
      this._handleCardClick = handleCardClick;
      this._handleConfirmDelete = handleConfirmDelete;

      this._cardSelector = cardSelector;

      this._api = api
      this._id = data._id // id карточки
      this._ownerId = data.owner._id // id создателя карточки
      this._userId = userId // id текущего пользователя
  };

  _getTemplate() {
      const cardElement = this._cardSelector.content.querySelector('.element').cloneNode(true);
      return cardElement;
  };

  generateCard() {
      this._element = this._getTemplate();
      this._cardImage = this._element.querySelector('.element__image');
      this._setEventListeners();
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__count_like').textContent = this._likes.length;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;


      if(!(this._ownerId === this._userId)) {
          this._element.querySelector('.element__delete-button').style.display = 'none'
      }
      
      if(this._likes.find((obj) => this._userId === obj._id)) {
        this._element.querySelector('.element__like-button').classList.add('element__like-button_active')
      }

      return this._element;
  };

  handleLikeClick() {

      const likeCount = this._element.querySelector('.element__count_like')
      const likeButton = this._element.querySelector('.element__like-button')


      if(!(likeButton.classList.contains('element__like-button_active'))) {
          this._api.like(this._id)
            .then((data) => {
              likeButton.classList.add('element__like-button_active')
              likeCount.textContent = data.likes.length
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          this._api.dislike(this._id)
            .then((data) => {
              likeButton.classList.remove('element__like-button_active')
              likeCount.textContent = data.likes.length
            })
            .catch((err) => console.log(err))
        }
  };

  handleCardDelete() {
      this._element.remove();
      this._element = null;
  };

  _setEventListeners() {
      // Likes
      this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
          this._handleLikeClick(evt);
      });
      // Remove Card
      this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
          this._handleConfirmDelete(evt);
      });
      this._cardImage.addEventListener('click', () => {
         this._handleCardClick(this._name, this._link)
      });
  }
}