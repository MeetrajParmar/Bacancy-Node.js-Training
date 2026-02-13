// import { Cart } from "./CartModel";
// import { Product } from "./ProductModel";
// import { Users } from "./userModel";

// // User & Product
// Users.hasMany(Product, { foreignKey: "userId", as: "products" });
// Product.belongsTo(Users, { foreignKey: "userId", as: "owner" });

// // Cart Associations (Matching your Service logic)
// Cart.belongsTo(Product, { foreignKey: "productId", as: "Product" }); // Alias: "Product"
// Product.hasMany(Cart, { foreignKey: "productId", as: "cartItems" });

// Cart.belongsTo(Users, { foreignKey: "userId", as: "user" });
// Users.hasMany(Cart, { foreignKey: "userId", as: "cartItems" });

// export { Users, Product, Cart };

// src/models/index.ts
import { Users } from "./userModel";
import { Product } from "./ProductModel";
import { Cart } from "./CartModel";

// IMPORTANT: Define the association exactly as you call it in the Service
Cart.belongsTo(Product, {
  foreignKey: "productId",
  as: "Product", // This MUST match the 'as' in your service include
});

Product.hasMany(Cart, {
  foreignKey: "productId",
  as: "cartItems",
});

Users.hasMany(Cart, {
  foreignKey: "userId",
  as: "cartItems",
});

Cart.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

Users.hasMany(Product, {
  foreignKey: "userId",
  as: "products",
});

Product.belongsTo(Users, {
  foreignKey: "userId",
  as: "owner",
});

export { Users, Product, Cart };
