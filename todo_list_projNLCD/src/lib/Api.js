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

    async put(url, body){
        const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        };
        return (await axios.put(`${this.baseUrl}${url}`, body, headers));
    }
   
    async delete(url){
        const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        };
        return (await axios.delete(`${this.baseUrl}${url}`, headers));
    }

    // Listes
    async getLists() {
        return await this.get(`/lists?_embed=cartes`);
    }

    async getList(listId) {
        return await this.get(`/lists/${listId}?_embed=cartes`);
    }

    async addList(title) {
        return await this.post(`/lists/`, {title:title});
    }

    async updateList(listId, title) {
        return await this.put(`/lists/${listId}`, {title:title});
    }

    async deleteList(listId) {
        return await this.delete(`/lists/${listId}`);
    }

    // Cartes
    async getCartes(){
        return await this.get(`/cartes/`);
    }

    async addCarte(listId, title, type, content) {
        return await this.post(`/cartes/`, {listId, title, type, content});
    }

    async updateCarte(carteId, listId, title, type, content) {
        return await this.put(`/cartes/${carteId}`, {listId:listId, title:title, type:type, content:content});
    }

    async deleteCarte(carteId) {
        return await this.delete(`/cartes/${carteId}`);
    }
}
export const api = new Api("http://localhost:3000");