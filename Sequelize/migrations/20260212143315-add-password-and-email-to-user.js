"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Users", "password", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pass@123",
    });
    await queryInterface.addColumn("Users", "email", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "demo@email.com",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Users", "password");
    await queryInterface.removeColumn("Users", "email");
  },
};
