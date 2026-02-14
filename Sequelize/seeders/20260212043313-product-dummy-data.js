"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Product",
      [
        {
          name: "Wireless Mouse",
          description: "Smooth wireless mouse with ergonomic grip.",
          price: 19.99,
          costPrice: 10.5,
          stockQuantity: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 35,
        },
        {
          name: "Mechanical Keyboard",
          description: "RGB mechanical keyboard with blue switches.",
          price: 79.99,
          costPrice: 45.0,
          stockQuantity: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 33,
        },
        {
          name: "Mobile",
          description: "Phone has several  Featueres.",
          price: 79.99,
          costPrice: 45.0,
          stockQuantity: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 39,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Product", null, {});
  },
};
