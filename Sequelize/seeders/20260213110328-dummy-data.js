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
        userId: 31,
        productId: 1,
        quantity: 5,
        totalBill: 800,
      },
      {
        userId: 31,
        productId: 3,
        quantity: 5,
        totalBill: 155,
      },
      {
        userId: 3,
        productId: 1,
        quantity: 1,
        totalBill: 150,
      },
      {
        userId: 1,
        productId: 1,
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
