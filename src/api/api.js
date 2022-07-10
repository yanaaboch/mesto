class Api {
    constructor({baseUrl, headers}) {
      this.baseUrl = baseUrl;
      this.headers = headers
    }
  
    async getInitialCards() {
        const response = await fetch(this.baseUrl+'/cards', {
            headers: this.headers
        })

        return response.ok ? await response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    }

    async addNewCard({name, link}) {
        const response = await fetch(this.baseUrl+'/cards', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        return response.ok ? await response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    } 



    async getUser() {
        const response = await fetch(this.baseUrl+'/users/me', {
            headers: this.headers
        })
        return response.ok ? await response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    }

    async editUser({title, subtitle}) {
        const response = await fetch(this.baseUrl+'/users/me', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: title,
                about: subtitle
            })
        });
        return response.ok ? response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    }

    async editUserAvatar({subtitle}){
        const response = await fetch(this.baseUrl+'/users/me/avatar', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: subtitle
            })
        });
        return response.ok ? response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    }


    async delete(id) {
        const response = await fetch(this.baseUrl+`/cards/${id}`, {
          method: 'DELETE',
          headers: this.headers
        })
        return response.ok ? await response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    }

    async like(id) {
        const response = await fetch(this.baseUrl+`/cards/likes/${id}`, {
          method: 'PUT',
          headers: this.headers
        })
        return response.ok ? await response.json()
            : Promise.reject(`Ошибка: ${response.status}`);
    }

    async dislike(id) {
    const response = await fetch(this.baseUrl+`/cards/likes/${id}`, {
        method: 'DELETE',
        headers: this.headers
    })
    return response.ok ? await response.json()
        : Promise.reject(`Ошибка: ${response.status}`);
    }


  }
  
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    headers: {
        authorization: '4e5f3876-9ff7-4342-831e-4075e38e0477',
        'Content-Type': 'application/json'
    }
}); 


export default api;
