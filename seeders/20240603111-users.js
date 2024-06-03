'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('medico', [
      {
        nome: 'BrunoDoe',
        especialidade: 'qualquer',
        contacto: 888888,
        email: 'bruno@doe.com',
        password: '123456789',
      },
      {
        nome: 'EmreSmith',
        especialidade: 'qualquer',
        contacto: 888888,
        email: 'emre@smith.com',
        password: '123456789',
      },
      {
        nome: 'JohnStone',
        especialidade: 'qualquer',
        contacto: 888888,
        email: 'john@stone.com',
        password: '123456789',
      }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('medico', null, {});
  }
};
