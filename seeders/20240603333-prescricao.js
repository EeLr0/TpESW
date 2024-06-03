'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('prescricao', [
      {
        medicamentos: 'Phenergan, Ibuprofeno', 
        nome: 'EeLr0',
        cni: '123456789',
      },
      {
        medicamentos: 'Amoxicilina',
        nome: 'Maria Santos',
        cni: '987654321',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('prescricoes', null, {});
  }
};
