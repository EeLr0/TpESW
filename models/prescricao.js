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
  /*nomeMedico: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'medico', 
      key: 'nome'
    }
  },*/
  /*nomePaciente: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
        model: 'paciente',
        key: 'nome'
    }
  },*/
  /*cniPaciente: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
        model: 'paciente',
        key: 'cni'
    }
  }*/

},
{
  freezeTableName: true,
  timestamps: false 
});

module.exports = Prescricao;