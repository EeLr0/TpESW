const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const Prescricao = meusequelize.define('prescricao', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 
  medicamentos: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  nome: Sequelize.STRING,
  cni: Sequelize.STRING

},
{
  freezeTableName: true,
  timestamps: false 
});

module.exports = Prescricao;