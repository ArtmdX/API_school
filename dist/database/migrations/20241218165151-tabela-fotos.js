"use strict";/*global module*/
/*eslint no-undef: "error"*/
module.exports = {
  async up (queryInterface, Sequelize) {

     return await queryInterface.createTable('fotos', {
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement:true,
       primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface) {

    return await queryInterface.dropTable('fotos');

  }
};
