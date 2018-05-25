const knex = require('knex')({
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    user: 'Amanda',
    password: 'password',
    database: 'Amanda',
  },
});

knex.schema.createTable('users', (table) => {
  table.increments('id').unsigned().primary();
  table.string('name', 30).nullable();
  table.string('email', 20).nullable();
  table.string('password', 20).nullable();
}).createTable('addresses', (table) => {
  table.increments('id').unsigned().primary();
  table.string('line1', 40).nullable();
  table.string('line2', 40).nullable();
  table.string('city', 20).nullable();
  table.string('state', 20).nullable();
  table.integer('zipcode', 10).nullable();
  table.integer('user_id').unsigned().references('users.id');
}).createTable('payments', (table) => {
  table.increments('id').unsigned().primary();
  table.integer('creditcard', 20).nullable();
  table.date('expirydate', 20).nullable();
  table.integer('cvv', 3).nullable();
  table.integer('billingzip', 10).nullable();
  table.integer('user_id').unsigned().references('users.id');
}).then(() => {
  return knex.insert({ name: 'Amanda' }).into('users');
})
  .catch((e) => {
    console.log(e);
  });

module.exports = knex;
