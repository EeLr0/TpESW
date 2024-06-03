'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('paciente', [
      {
        nome: 'Alice',
        morada: '123 Main St',
        datanascimento: '1990-01-01', 
        contacto: 123456789,
        cni: '123456789',
        inps: true
      },
      {
        nome: 'Bob',
        morada: '456 Elm St',
        datanascimento: '1985-05-15',
        contacto: 987654321,
        cni: '987654321',
        inps: false
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pacientes', null, {});
  }
};