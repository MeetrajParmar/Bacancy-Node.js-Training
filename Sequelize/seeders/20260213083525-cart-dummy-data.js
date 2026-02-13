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
        userId: 4,
        productId: 1,
        quantity: 5,
        totalBill: 800,
      },
      {
        userId: 2,
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
        userId: 4,
        productId: 2,
        quantity: 1,
        totalBill: 100,
      },
      {
        userId: 4,
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
  },
};
