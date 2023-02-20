const uuid = require('uuid');

module.exports = {

    /**
     * Cette fonction rajoute un identifiant UNIQUE aléatoire sous forme d'une chaine de caractères représentant
     * un UUIDv4. Ce qu'il faut retenir est que cette chaîne est très longue, et aléatoire, donc supposée unique.
     * Cette fonction n'est appelée QUE si la requête est un POST (une création d'élément), permettant de ne pas
     * avoir à spécifier l'UUID côté client en le générant automatique côté serveur.
     * @param {*} request 
     * @param {*} _response 
     * @param {*} next 
     */
    uuids: (request, _response, next) => {
        if (request.method === 'POST') request.body.id = uuid.v4();
        next();
    }
};