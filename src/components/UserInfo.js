export default class UserInfo {
    constructor({ titleContainer, subtitleContainer }) {
        this._titleContainer = titleContainer;
        this._subtitleContainer = subtitleContainer;
    };

    getUserInfo() {
        this._profileValues = {};
        this._profileValues.title = this._titleContainer.textContent;
        this._profileValues.subtitle = this._subtitleContainer.textContent;
        return this._profileValues;
    };

    setUserInfo(formData) {
        this._titleContainer.textContent = formData['title'];
        this._subtitleContainer.textContent = formData['subtitle'];
    };
}