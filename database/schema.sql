set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";
CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "username" text,
  "password" text,
  "firstName" text,
  "lastName" text
);

CREATE TABLE "userAddresses" (
  "addressId" serial PRIMARY KEY,
  "userId" int,
  "address" text,
  "city" text,
  "postalCode" text,
  "country" text,
  "telephone" text
);

CREATE TABLE "productItem" (
  "productItemId" serial PRIMARY KEY,
  "categoryId" int,
  "name" text,
  "desc" text,
  "weight" int,
  "price" int
);

CREATE TABLE "categories" (
  "categoryId" serial PRIMARY KEY,
  "name" text
);

CREATE TABLE "shoppingCarts" (
  "shoppingCartId" serial PRIMARY KEY,
  "userId" int,
  "productItemId" int,
  "quantity" int
);

ALTER TABLE "shoppingCarts" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "shoppingCarts" ADD FOREIGN KEY ("productItemId") REFERENCES "productItem" ("productItemId");

ALTER TABLE "productItem" ADD FOREIGN KEY ("categoryId") REFERENCES "categories" ("categoryId");

ALTER TABLE "userAddresses" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");
