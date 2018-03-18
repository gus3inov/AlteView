import * as query from 'mysql-query-promise';
import * as config from  'config';
const tableName = config.get('API.server.tableName');

interface IPosters {
    id: string;
    name: string;
    date: string;
    genre: string;
    price: number;
}

const poster: object = {
    getAll: async () => {
        return query(`SELECT * from ${tableName}`);
    },
    get: async (id) => {
        let posters = await query(`SELECT * FROM ${tableName} WHERE id=?`,[Number(id)]);
        return posters[0];
    },
    create: async function ({ id, name, genre, date, price }) {
        let poster = {
            name: String(name),
            date: String(date),
            genre: String(genre),
            price: Number(price)
        };

        if (id > 0) poster.id = Number(id);
        let result = await query(`INSERT INTO ${tableName} SET ? ON DUPLICATE KEY UPDATE ?`,[poster,poster]);
        if (result.insertId) id = result.insertId;
        return this.get(id);
    },
    update: async (id, poster)=> {
        if (typeof poster === 'object') {
            let uposter = {};
            if (poster.hasOwnProperty('name')) uposter.name = String(poster.name);
            if (poster.hasOwnProperty('date')) uposter.date = String(poster.date);
            if (poster.hasOwnProperty('genre')) uposter.genre = String(poster.genre);
            if (poster.hasOwnProperty('price')) uposter.price = Number(poster.price);
            let result = await query(`UPDATE ${tableName} SET ? WHERE id=?`,[uposter, Number(id)]);
            return result.affectedRows;
        }
    },
    delete: async (id) => {
        let result = await query(`DELETE FROM ${tableName} WHERE id=?`,[Number(id)]);
        return result.affectedRows;
    }
};
export default poster;