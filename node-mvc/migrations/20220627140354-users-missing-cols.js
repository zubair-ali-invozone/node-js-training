'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('users', 'createdAt', {
          type: Sequelize.DATE
        }, { transaction: t }),
        queryInterface.addColumn('users', 'updatedAt', {
          type: Sequelize.DATE
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
  }
};
