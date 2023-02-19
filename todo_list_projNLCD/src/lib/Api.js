import axios from "axios";
const { v4: uuidv4 } = require('uuid');

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
    async getQuotes(){
        return await this.get(`/quotes?_expand=author`);
    }
    async insertQuote(content, authorId) {
        // return (await axios.post(`${this.baseUrl}/quotes`, { content: content, authorId: authorId })).data;
        return await this.post("/quotes", { id:uuidv4(), content:content, actor:"", authorId:authorId, season:"", title:"", episode:1 })
    }

    async getAuthors(){
        return await this.get(`/authors?_embed=quotes`);
    }
    async getAuthor(id){
        return await this.get(`/authors/${id}?_embed=quotes`);
    }

}

export const api = new Api("http://localhost:3000");
