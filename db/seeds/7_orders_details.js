
exports.seed = (knex) => {
  return knex('orders_details').del()
  .then(() => {
    return knex('orders_details').insert([{
      order_id: 1,
      product_id: 1,
      quantity: 1
      }, {
      order_id: 2,
      product_id: 2,
      quantity: 2
      }, {
      order_id: 3,
      product_id: 3,
      quantity: 2
      },{
      order_id: 4,
      product_id: 5,
      quantity: 1
      },{
      order_id: 5,
      product_id: 6,
      quantity: 4
    }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('orders_details_id_seq', (SELECT MAX(id) FROM orders_details));"
    );
  });
};
