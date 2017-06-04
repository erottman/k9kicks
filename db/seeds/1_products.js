exports.seed = function(knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert([{
      id: 1,
      category_id: 2,
      promotion_id: 1,
      review_id: 1,
      name: 'Denim Gladiator Sandal',
      price: 15.99,
      quantity: 5,
      description:'This ultra-posh denim gladiator sandal has a super comfy hook-and-loop closure strap as well as a durable rubber sole.  Your pooch will be the envy of all the other dogs at the dog park!',
      image_url: 'https://s-media-cache-ak0.pinimg.com/736x/36/6d/6a/366d6ad5043ff7ed25e8e7124bc33ecc.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      id: 2,
      category_id: 1,
      promotion_id: 5,
      review_id: 2,
      name: 'Autumn Boot',
      price: 25.00,
      quantity: 20,
      description:'When there\'s a chill in the air and the leaves begin change, it\'s time to protect Fe-Fe\'s feet with these soft, warm boots that will be rugged enough for long afternoon walks and comfy enough to make your pup feel like she\'s walking on air.',
      image_url: 'http://ecx.images-amazon.com/images/I/41cA55EjoML._SL250_.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      id: 3,
      category_id: 4,
      promotion_id: 4,
      review_id: 3,
      name: 'Knee-high Booties',
      price: 40.00,
      quantity: 10,
      description:'So versititle and so fashionable!  The extra-long knit sock can be rolled down, on warmer days, and up when the air is crisp.  This boot also features a flexible rubber sole - perfect for Pepe\'s pads.',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/51IJu14FSCL._SL250_.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      id: 4,
      category_id: 3,
      promotion_id: 2,
      review_id: 4,
      name: 'Caninie Converse',
      price: 38.99,
      quantity: 6,
      description:'Back by popular demand - high-tops!  Every dog needs to showcase his personality with his own unique pair of Converse kicks!  Man\'s best friend just got a pair of Man\'s best shoe!',
      image_url: 'https://5.imimg.com/data5/MV/XS/MY-26604747/dog-shoes-250x250.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      id: 5,
      category_id: 4,
      promotion_id: 3,
      review_id: 5,
      name: 'Mesh Slip-On',
      price: 19.99,
      quantity: 8,
      description:'Perfect for trotting around the house or a quick walk to the mailbox to greet the Mail Man.  Our Mesh Slip-On\'s have a textured sole - great for houses with slick floors - and are super lightweight, so Spot\'s feet will stay cool and comfy.',
      image_url: 'https://www.marshallspetzone.com/3663-home_default/pawzone-red-summer-mesh-dog-shoes-small.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      id: 6,
      category_id: 2,
      promotion_id: 5,
      review_id: 6,
      name: 'Rain Booties',
      price: 27.99,
      quantity: 3,
      description:'No one likes wet feet - especially your furry friend.  These flexible rubber booties in a delightful fuschia makes any rainy day a little more fun!',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/41sf1Dee%2BcL._SL250_.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },
    {
      id: 7,
      category_id: 1,
      promotion_id: 5,
      review_id: 3,
      name: 'Snowy Boots',
      price: 36.00,
      quantity: 9,
      description:'Max will stay unbelievably warm with these Gore-Tex lined boots made for those days when the snow falls and the wind blows.    ',
      image_url: 'https://images-na.ssl-images-amazon.com/images/I/41sf1Dee%2BcL._SL250_.jpg',
      created_at: new Date('2016-06-26 14:26:16 UTC'),
      updated_at: new Date('2016-06-26 14:26:16 UTC')
    },

  ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('products_id_seq', (SELECT MAX(id) FROM products))"
    )
  })
}
