'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('prescricao', [
      {
        medicamentos: 'Paracetamol, Ibuprofeno', // Example of multiple medicines separated by commas
      },
      {
        medicamentos: 'Amoxicilina, Tose',
      },
      // Add more prescription objects as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all data inserted by the up function
    await queryInterface.bulkDelete('prescricoes', null, {});
  }
};
