/*global module*/
/*eslint no-undef: "error"*/
module.exports = {
  async up (queryInterface, Sequelize) {

     return await queryInterface.createTable('users', {
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       autoIncrement:true,
       primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
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

    return await queryInterface.dropTable('users');

  }
};
