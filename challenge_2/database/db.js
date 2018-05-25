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
  table.increments('id');
  table.string('name');
  table.string('email');
  table.string('password');
}).createTable('addresses', (table) => {
  table.increments('id');
  table.string('line1');
  table.string('line2');
  table.string('city');
  table.string('state');
  table.string('zipcode');
  table.integer('user_id').unsigned().references('users.id');
}).createTable('payments', (table) => {
  table.increments('id');
  table.string('creditcard');
  table.string('expirydate');
  table.string('cvv');
  table.string('billingzip');
  table.integer('user_id').unsigned().references('users.id');
}).then(() => {
  return knex.insert({ name: 'Amanda' }).into('users');
})
  .catch((e) => {
    console.log(e);
  });
