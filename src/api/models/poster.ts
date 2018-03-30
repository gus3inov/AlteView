import * as query from 'mysql-query-promise';
import * as config from  'config';
const tableName = config.get('API.server.tableName');

export interface IPoster {
    id: string;
    name: string;
    date: string;
    time: string;
    country: string;
    rating: number;
    film_rating: number;
    genre: string;
    price: number;
    description: string;
}

export interface IModelPoster{
    getAll();
    get();
    create();
    deletePoster();
    update();
}

const poster: IModelPoster = {
    getAll: async () => {
        return query(`SELECT * from ${tableName}`);
    },
    get: async (id: number) => {
        let posters = await query(`SELECT * FROM ${tableName} WHERE id=?`, [Number(id)]);
        return posters[0];
    },
    create: async function
        ({
            id,
            name,
            date,
            time,
            country,
            rating,
            film_rating,
            genre,
            price,
            description
        }) {
        let poster = {
            id: Number(id),
            name: String(name),
            date: String(date),
            time: String(time),
            country: String(country),
            rating: Number(rating),
            film_rating: Number(film_rating),
            genre: String(genre),
            price: Number(price),
            description: String(description)
        };

        if (id > 0) poster.id = Number(id);
        let result = await query(`INSERT INTO ${tableName} SET ? ON DUPLICATE KEY UPDATE ?`, [poster, poster]);
        if (result.insertId) id = result.insertId;
        return this.get(id);
    },
    update: async (id: number, poster: IPoster) => {
        if (typeof poster === 'object') {
            let uposter: IPoster = {};
            if (poster.hasOwnProperty('name')) uposter.name = String(poster.name);
            if (poster.hasOwnProperty('date')) uposter.date = String(poster.date);
            if (poster.hasOwnProperty('time')) uposter.time = String(poster.time);
            if (poster.hasOwnProperty('country')) uposter.country = String(poster.country);
            if (poster.hasOwnProperty('country')) uposter.country = String(poster.country);
            if (poster.hasOwnProperty('rating')) uposter.rating = Number(poster.rating);
            if (poster.hasOwnProperty('film_rating')) uposter.film_rating = Number(poster.film_rating);
            if (poster.hasOwnProperty('price')) uposter.price = Number(poster.price);
            if (poster.hasOwnProperty('genre')) uposter.genre = String(poster.genre);
            if (poster.hasOwnProperty('description')) uposter.description = String(poster.description);
            let result = await query(`UPDATE ${tableName} SET ? WHERE id=?`, [uposter, Number(id)]);
            return result.affectedRows;
        }
    },
    deletePoster: async (id: number) => {
        let result = await query(`DELETE FROM ${tableName} WHERE id=?`, [Number(id)]);
        return result.affectedRows;
    }
};
export default poster;