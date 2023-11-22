-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "users" ("userId", "username", "password", "firstName", "lastName")
values (
  1,
  'testuser',
  'password1',
  'john',
  'doe'
  );

insert into "userAddresses" ("addressId", "userId", "address", "city", "postalCode", "country", "telephone")
values (
  1,
  1,
  '123 Fake St.',
  'Springfield',
  12345,
  'United States',
  '(123)456-7890'
);

insert into "categories" ("name")
values
  ('Backpacks'),
  ('Tents'),
  ('Boots'),
  ('Poles'),
  ('Clothing'),
  ('Accessories');

insert into "productItem" ("categoryId", "imageUrl", "name", "desc", "weightLb", "weightOz", "price")
values (
  1,
  '/images/backpack1gregory.jpeg',
  'Gregory',
  'Maven 55 - Men’s',
  2,
  12,
  19000
  ),
 (
  1,
  '/images/backpack2osprey.jpeg',
  'Osprey',
  'Archeon 45 - Men’s',
  2,
  4,
  16900
),
(
  1,
  '/images/backpack3granitegear.jpeg',
  'Granite Gear',
  'Crown2 60 - Men’s',
  4,
  8,
  34000
),
(
  1,
  '/images/backpack4kelty.jpeg',
  'Kelty',
  'Asher 55 - Womens',
  3,
  6,
  17000
),
(
  2,
  '/images/tent1bigagnes.jpeg',
  'Big Agnes',
  'Copper Spur HV UL2',
  3,
  2,
  55000
),
(
  2,
  '/images/tent2rei.jpeg',
  'REI Co-Op',
  'Half-Dome SL 2+',
  4,
  6,
  32900
),
(
  2,
  '/images/tent3rei.jpeg',
  'REI Co-Op',
  'Trail Hut 2',
  5,
  12,
  19000
),
(
  2,
  '/images/tent4zpacks.jpeg',
  'Z Packs',
  'Duplex Zip',
  1,
  1,
  69000
),
(
  2,
  '/images/tent5msr.jpeg',
  'MSR',
  'Access 2',
  4,
  1,
  80000
),
(
  3,
  '/images/tent5msr.jpeg',
  'MSR',
  'Access 2',
  4,
  1,
  80000
),
(
  4,
  '/images/tent5msr.jpeg',
  'MSR',
  'Access 2',
  4,
  1,
  80000
),
(
  5,
  '/images/tent5msr.jpeg',
  'MSR',
  'Access 2',
  4,
  1,
  80000
),
(
  6,
  '/images/tent5msr.jpeg',
  'MSR',
  'Access 2',
  4,
  1,
  80000
);


insert into "shoppingCarts" ("userId", "productItemId", "quantity")
values (
  1,
  1,
  5
)
