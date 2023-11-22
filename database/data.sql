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
  1,
  '/images/backpack5deuter.jpeg',
  'Deuter',
  'Futura 32 - Womens',
  3,
  2,
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
  '/images/poles1.jpeg',
  'Black Diamond',
  'Pursuit Trekking Poles',
  1,
  8,
  17000
),
(
  3,
  '/images/poles2.jpeg',
  'Black Diamond',
  'Distance Carbon FLZ Trekking Poles',
  2,
  1,
  15000
),
(
  3,
  '/images/poles3.jpeg',
  'LEKI',
  'Womens Micro Vario Carbon Pole',
  1,
  1,
  16000
),
(
  3,
  '/images/poles4.jpeg',
  'Komperdell',
  'Trail Pro Contour Poles',
  1,
  2,
  13000
),
(
  3,
  '/images/poles5.jpeg',
  'Black Diamond',
  'Alpine Carbon Cork Trekking Poles',
  1,
  4,
  12000
),
(
  4,
  '/images/clothes3.jpeg',
  'Patagonia',
  'Men’s Down Sweater Jacket',
  0,
  13,
  27900
),
(
  4,
  '/images/clothes2.jpeg',
  'Carhartt',
  'Men’s Washed Duck Bartlett Jacket',
  4,
  10,
  27900
),
(
  4,
  '/images/clothes1.jpeg',
  'Patagonia',
  'Men’s Classic Retro-X Jacket',
  3,
  8,
  22900
),
(
  4,
  '/images/clothes4.jpeg',
  'Arcteryx',
  'Men’s Beta Insulated Jacket',
  4,
  6,
  75000
),
(
  4,
  '/images/clothes5.jpeg',
  'Fjallraven',
  'Men’s Singi Down Jacket',
  6,
  15,
  80000
),
(
  5,
  '/images/acc1.jpeg',
  'My Medic',
  'Wound Closure Kit',
  0,
  12,
  14995
),
(
  5,
  '/images/acc2.jpeg',
  'Black Diamond',
  'Storm 500-R Headlamp',
  0,
  3,
  7495
),
(
  5,
  '/images/acc3.jpeg',
  'MSR',
  'Reactor 2.5L Stove System',
  0,
  6,
  30995
),
(
  5,
  '/images/acc4.jpeg',
  'Mammut',
  ' Alugator Light Shovel',
  2,
  2,
  7495
),
(
  5,
  '/images/acc5.jpeg',
  'CamelBak',
  'Fusion Reservoir Tru Waterproof Zipper',
  0,
  3,
  5595
);

insert into "shoppingCarts" ("userId", "productItemId", "quantity")
values (
  1,
  1,
  5
)
