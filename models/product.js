const db = require("../util/database");
module.exports = class Product {
  constructor(id, title, imageurl, description, price) {
    this.id = id;
    this.title = title;
    this.imageurl = imageurl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title,price,description,imageurl) values(?,?,?,?)",
      [this.title, this.price, this.description, this.imageurl]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products where id = ?", [id]);
  }
};
