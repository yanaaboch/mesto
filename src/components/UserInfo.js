export default class UserInfo {
    constructor({ titleSelector, subtitleSelector }) {
        this._titleSelector = titleSelector;
        this._subtitleSelector = subtitleSelector;
    };

    getUserInfo() {
        this._profileValues = {};
        this._profileValues.title = this._titleSelector.textContent;
        this._profileValues.subtitle = this._subtitleSelector.textContent;
        return this._profileValues;
    };

    setUserInfo(formData) {
        this._titleSelector.textContent = formData['title'];
        this._subtitleSelector.textContent = formData['subtitle'];
    };
}