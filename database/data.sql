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

insert into "productItem" ("categoryId", "imageUrl", "name", "desc", "weight", "size", "price")
values (
  1,
  '/images/backpack1gregory.jpeg',
  'Gregory',
  'Maven 55 - Men’s',
  '[70, 72, 80]',
  '["S", "M", "L"]',
  19000
  ),
  (
  1,
  '/images/backpack2osprey.jpeg',
  'Osprey',
  'Archeon 45 - Men’s',
  '[66, 72, 88]',
  '["S", "M", "L"]',
  16900
),
(
  1,
  '/images/backpack3granitegear.jpeg',
  'Granite Gear',
  'Crown2 60 - Men’s',
  '[72, 74, 82]',
  '["S", "M", "L"]',
  34000
),
(
  1,
  '/images/backpack4kelty.jpeg',
  'Kelty',
  'Asher 55 - Women’s',
  '[54, 60, 76]',
  '["S", "M", "L"]',
  17000
),
(
  1,
  '/images/backpack5deuter.jpeg',
  'Deuter',
  'Futura 32 - Women’s',
  '[50, 54, 60]',
  '["S", "M", "L"]',
  17000
),
(
  2,
  '/images/tent1bigagnes.jpeg',
  'Big Agnes',
  'Copper Spur HV UL2',
  '[50]',
  '["One-Size"]',
  55000
),
(
  2,
  '/images/tent2rei.jpeg',
  'REI Co-Op',
  'Half-Dome SL 2+',
  '[70]',
  '["One-Size"]',
  32900
),
(
  2,
  '/images/tent3rei.jpeg',
  'REI Co-Op',
  'Trail Hut 2',
  '[92]',
  '["One-Size"]',
  19000
),
(
  2,
  '/images/tent4zpacks.jpeg',
  'Z Packs',
  'Duplex Zip',
  '[17]',
  '["One-Size"]',
  69000
),
(
  2,
  '/images/tent5msr.jpeg',
  'MSR',
  'Access 2',
  '[65]',
  '["One-Size"]',
  80000
),
(
  3,
  '/images/poles1.jpeg',
  'Black Diamond',
  'Pursuit Trekking Poles',
  '[24]',
  '["One-Size"]',
  17000
),
(
  3,
  '/images/poles2.jpeg',
  'Black Diamond',
  'Distance Carbon FLZ Trekking Poles',
  '[33]',
  '["One-Size"]',
  15000
),
(
  3,
  '/images/poles3.jpeg',
  'LEKI',
  'Women’s Micro Vario Carbon Pole',
  '[17]',
  '["One-Size"]',
  16000
),
(
  3,
  '/images/poles4.jpeg',
  'Komperdell',
  'Trail Pro Contour Poles',
  '[34]',
  '["One-Size"]',
  13000
),
(
  3,
  '/images/poles5.jpeg',
  'Black Diamond',
  'Alpine Carbon Cork Trekking Poles',
  '[20]',
  '["One-Size"]',
  12000
),
(
  4,
  '/images/clothes3.jpeg',
  'Patagonia',
  'Men’s Down Sweater Jacket',
  '[13, 14, 15]',
  '["S", "M", "L"]',
  27900
),
(
  4,
  '/images/clothes2.jpeg',
  'Carhartt',
  'Men’s Washed Duck Bartlett Jacket',
  '[74, 80, 86]',
  '["S", "M", "L"]',
  27900
),
(
  4,
  '/images/clothes1.jpeg',
  'Patagonia',
  'Men’s Classic Retro-X Jacket',
  '[56, 60, 64]',
  '["S", "M", "L"]',
  22900
),
(
  4,
  '/images/clothes4.jpeg',
  'Arcteryx',
  'Men’s Beta Insulated Jacket',
  '[70, 76, 82]',
  '["S", "M", "L"]',
  75000
),
(
  4,
  '/images/clothes5.jpeg',
  'Fjallraven',
  'Men’s Singi Down Jacket',
  '[111, 122, 128]',
  '["S", "M", "L"]',
  80000
),
(
  5,
  '/images/acc1.jpeg',
  'My Medic',
  'Wound Closure Kit',
  '[12]',
  '["One-Size"]',
  15000
),
(
  5,
  '/images/acc2.jpeg',
  'Black Diamond',
  'Storm 500-R Headlamp',
  '[3]',
  '["One-Size"]',
  7400
),
(
  5,
  '/images/acc3.jpeg',
  'MSR',
  'Reactor 2.5L Stove System',
  '[6]',
  '["One-Size"]',
  31000
),
(
  5,
  '/images/acc4.jpeg',
  'Mammut',
  ' Alugator Light Shovel',
  '[2]',
  '["One-Size"]',
  7500
),
(
  5,
  '/images/acc5.jpeg',
  'CamelBak',
  'Fusion Reservoir Tru Waterproof Zipper',
  '[3]',
  '["One-Size"]',
  5600
);
