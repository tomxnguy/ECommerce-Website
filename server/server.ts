/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express, { query } from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/users', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "users"
    `;
    const result = await db.query(sql);
    const users = result.rows;
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
});

app.get('/api/entries/:users', async (req, res, next) => {
  try {
    const userId = Number(req.params.users);
    if (typeof userId !== 'number') {
      throw new ClientError(400, 'userId must be a number');
    }
    if (userId < 1) {
      throw new ClientError(400, 'userId must be a positive number');
    }

    const sql = `
    select *
    from "users"
    where "userId" = $1
    `;
    const params = [userId];
    const result = await db.query(sql, params);
    const user = result.rows[0];
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('/api/categories', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "categories"
    `;
    const result = await db.query(sql);
    const categories = result.rows;
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
  }
});

app.get('/api/categories/:categoryId', async (req, res, next) => {
  try {
    const categoryId = Number(req.params.categoryId);
    if (typeof categoryId !== 'number') {
      throw new ClientError(400, 'productItemId must be a number');
    }
    if (categoryId < 1) {
      throw new ClientError(400, 'productItemId must be a positive number');
    }

    const sql = `
    select *
    from "categories"
    where "categoryId" = $1
    `;
    const params = [categoryId];
    const result = await db.query(sql, params);
    const category = result.rows[0];
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.post('/api/categories', async (req, res, next) => {
  try {
    const sql = `
    insert into "categories" ("name")
    values ($1)
    returning *
    `;
    const { name } = req.body;
    const params = [name];
    if (!name) {
      throw new ClientError(400, 'Missing name');
    }
    const result = await db.query(sql, params);
    const newCat = result.rows[0];
    res.status(200).json(newCat);
  } catch (error) {
    next(error);
  }
});

app.get('/api/productItem', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "productItem"
    `;
    const result = await db.query(sql);
    const productItem = result.rows;
    res.status(200).json(productItem);
  } catch (error) {
    console.error(error);
  }
});

app.get('/api/productItem/:productItemId', async (req, res, next) => {
  try {
    const productItemId = Number(req.params.productItemId);
    if (typeof productItemId !== 'number') {
      throw new ClientError(400, 'productItemId must be a number');
    }
    if (productItemId < 1) {
      throw new ClientError(400, 'productItemId must be a positive number');
    }

    const sql = `
    select *
    from "productItem"
    where "productItemId" = $1
    `;
    const params = [productItemId];
    const result = await db.query(sql, params);
    const productItem = result.rows[0];
    res.status(200).json(productItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('/api/productItems/:categoryId', async (req, res, next) => {
  try {
    const categoryId = Number(req.params.categoryId);
    if (typeof categoryId !== 'number') {
      throw new ClientError(400, 'productItemId must be a number');
    }
    if (categoryId < 1) {
      throw new ClientError(400, 'productItemId must be a positive number');
    }

    const sql = `
    select *
    from "productItem"
    where "categoryId" = $1
    `;
    const params = [categoryId];
    const result = await db.query(sql, params);
    const productItem = result.rows;
    res.status(200).json(productItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.post('/api/productItem', async (req, res, next) => {
  try {
    const { categoryId, name, desc, weightLb, weightOz, price } = req.body;
    if (!categoryId) {
      throw new ClientError(400, 'Missing categoryId');
    }
    if (!name) {
      throw new ClientError(400, 'Missing name');
    }
    if (!desc) {
      throw new ClientError(400, 'Missing desc');
    }
    if (!weightLb) {
      throw new ClientError(400, 'Missing weightLb');
    }
    if (!weightOz) {
      throw new ClientError(400, 'Missing weightOz');
    }
    if (!price) {
      throw new ClientError(400, 'Missing price');
    }
    const sql = `
    insert into "productItem" ("categoryId", "name", "desc", "weightLb", "weightOz", "price")
    values ($1, $2, $3, $4, $5, $6)
    returning *
    `;
    const params = [categoryId, name, desc, weightLb, weightOz, price];
    const result = await db.query(sql, params);
    const newItem = result.rows[0];
    res.status(200).json(newItem);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('/api/shoppingCarts', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "shoppingCarts"
    `;
    const result = await db.query(sql);
    const shoppingCarts = result.rows;
    res.status(200).json(shoppingCarts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.get('/api/shoppingCarts/:shoppingCartsId', async (req, res, next) => {
  try {
    const shoppingCartsId = Number(req.params.shoppingCartsId);
    if (typeof shoppingCartsId !== 'number') {
      throw new ClientError(400, 'shoppingCartsId must be a number');
    }
    if (shoppingCartsId < 1) {
      throw new ClientError(400, 'shoppingCartsId must be a positive number');
    }

    const sql = `
    select *
    from "shoppingCarts"
    where "shoppingCartsId" = $1
    `;
    const params = [shoppingCartsId];
    const result = await db.query(sql, params);
    const shoppingCartId = result.rows[0];
    res.status(200).json(shoppingCartId);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Vite server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
