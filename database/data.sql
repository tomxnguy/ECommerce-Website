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

insert into "productItem" ("categoryId", "name", "desc", "weightLb", "weightOz", "price")
values (
  1,
  'Gregory',
  'Maven 55 - Mens',
  2,
  12,
  19000
);

insert into "shoppingCarts" ("userId", "productItemId", "quantity")
values (
  1,
  1,
  5
)
