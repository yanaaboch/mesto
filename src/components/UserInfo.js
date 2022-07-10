
export default class UserInfo {
    constructor(userSelectors) {
      this._profileName = userSelectors.name
      this._profileInfo = userSelectors.info
  
      this._profileAvatar = userSelectors.avatar
    }
  
    getUserInfo() {
      this._userData = {
        name: this._profileName.textContent,
        info: this._profileInfo.textContent
      }
  
      return this._userData;
    }
  
    setUserInfo(user) {
      this._profileName.textContent = user.name;
      this._profileInfo.textContent = user.about;
      this.setUserAvatar(user)
    }

    setUserAvatar(user) {
      this._profileAvatar.src = user.avatar
    }
  }