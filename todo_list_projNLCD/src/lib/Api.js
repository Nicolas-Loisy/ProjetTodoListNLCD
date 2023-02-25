import axios from "axios";

export default class Api {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    async get(url){
        return (await axios.get(`${this.baseUrl}${url}`)).data
    }
    async post(url, body){
        const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        };
        return (await axios.post(`${this.baseUrl}${url}`, body, headers));
    }
    
    // async getQuotes(){
    //     return await this.get(`/quotes?_expand=author`);
    // }
    // async insertQuote(content, authorId) {
    //     return await this.post("/quotes", { content:content, actor:"", authorId:authorId, season:"", title:"", episode:1 })
    // }

    // async getAuthors(){
    //     return await this.get(`/authors?_embed=quotes`);
    // }
    // async getAuthor(id){
    //     return await this.get(`/authors/${id}?_embed=quotes`);
    // }

    // Listes
    async getLists() {
        return await this.get(`/lists`);
    }

    async getList(listId) {
        return await this.get(`/lists/${listId}`);
    }

    async addList(list) {
        return await this.post(`/lists`, list);
    }

    async updateList(listId, list) {
        return await this.put(`/lists/${listId}`, list);
    }

    async deleteList(listId) {
        return await this.delete(`/lists/${listId}`);
    }

    // Cartes
    async getCards(listId) {
        return this.get(`/lists/${listId}/cards`);
    }

    async getCard(listId, cardId) {
        return await this.get(`/lists/${listId}/cards/${cardId}`);
    }

    async addCard(listId, card) {
        return await this.post(`/lists/${listId}/cards`, card);
    }

    async updateCard(listId, cardId, card) {
        return await this.post(`/lists/${listId}/cards/${cardId}`, card);
    }

    async deleteCard(listId, cardId) {
        return await this.post(`/lists/${listId}/cards/${cardId}`);
    }
}
export const api = new Api("http://localhost:3000");