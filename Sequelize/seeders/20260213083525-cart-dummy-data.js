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
    await queryInterface.bulkInsert("Cart", [
      {
        userId: 32,
        productId: 10,
        quantity: 5,
        totalBill: 800,
      },
      {
        userId: 35,
        productId: 12,
        quantity: 5,
        totalBill: 155,
      },
      {
        userId: 39,
        productId: 10,
        quantity: 1,
        totalBill: 150,
      },
      {
        userId: 36,
        productId: 11,
        quantity: 1,
        totalBill: 100,
      },
      {
        userId: 33,
        productId: 10,
        quantity: 1,
        totalBill: 50,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cart", null, {});
  },
};
