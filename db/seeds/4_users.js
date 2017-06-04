
exports.seed = (knex) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([{
        id:1,
        username: 'admin',
        password: 'admin',
        role: 'admin'
      }, {
        id:2,
        username: 'betty',
        password: 'betty',
        role: 'admin'
      }, {
        id:3,
        username: 'erica',
        password: 'erica',
        role: 'admin'
      },{
        id:4,
        username: 'amber',
        password: 'amber',
        role: 'admin'
      }
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('promotions_id_seq', (SELECT MAX(id) FROM promotions));"
    );
  });
};
