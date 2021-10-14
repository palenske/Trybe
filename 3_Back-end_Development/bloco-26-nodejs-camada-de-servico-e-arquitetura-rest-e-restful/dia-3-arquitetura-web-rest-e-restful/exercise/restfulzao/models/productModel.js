const connection = require('./connection');

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return !rows.length ? null : rows;
  } catch (err) {
    console.error(err);
    return { error: true };
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    return !result.length ? null : result[0];
  } catch (err) {
    console.error(err);
    return { error: true };
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
  } catch (err) {
    console.error(err);
    return { error: true };
  }
};

const add = async (name, brand) => {
  try {
    const [
      result,
    ] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return err;
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id])
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };