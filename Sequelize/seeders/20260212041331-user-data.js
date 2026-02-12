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
      "Users",
      [
        {
          firstName: "Meetraj",
          lastName: "Parmar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Amit",
          lastName: "Sharma",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Priya",
          lastName: "Patel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Neha",
          lastName: "Joshi",
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
