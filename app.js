let knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'foo',
    password : '',
    database : 'foo'
  }
});

// console.log(knex);

console.log(knex('flyway_schema_history').toSQL().toNative());
