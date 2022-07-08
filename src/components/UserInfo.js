export default class UserInfo {
    constructor({ username, job }) {
      this._username = document.querySelector(username);
      this._job = document.querySelector(job);
    }
  
    getUserInfo() {
      const userInfo = {
        username: this._username.textContent,
        job: this._job.textContent
      }
  
      return userInfo;
    }
  
    setUserInfo(formData) {
      this._username.textContent = formData['title'];
      this._job.textContent = formData['subtitle'];
    }
  }