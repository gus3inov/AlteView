'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db, callback) {
    db.createTable('posters', {
        id: {
            type: 'int',
            unsigned: true,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
            length: 11,
        },
        name: 'string',
        date: 'date',
        time: 'time',
        country: 'string',
        rating: 'float',
        film_rating: {
            type: 'int',
            length: 2
        },
        genre: 'string',
        price: {
            type: 'int',
            length: 11
        },
        description: 'text'

    }, callback);
};

exports.down = function (db, callback) {
    db.dropTable('posters', callback);
};

exports._meta = {
    "version": 1
};
