const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routes/users');
const prescricoesRoute = require('./routes/prescricoes');

const errorController = require('./controllers/error');
const conexaoBD = require('./util/database');

const Prescricao = require('./models/prescricao');
const Paciente = require('./models/paciente');
const Medico = require('./models/medico');


const app = express();

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(userRoutes);
app.use(prescricoesRoute);

/*
Prescricao.belongsTo(Medico, { foreignKey: 'nomeMedico', targetKey: 'nome', as: 'medico' });
Medico.hasMany(Prescricao, { foreignKey: 'nomeMedico', sourceKey: 'nome', as: 'prescricoes' });

Prescricao.belongsTo(Paciente, { foreignKey: 'nomePaciente', targetKey: 'nome', as: 'pacienteNome' });
Prescricao.belongsTo(Paciente, { foreignKey: 'cniPaciente', targetKey: 'cni', as: 'pacienteCni' });
Paciente.hasMany(Prescricao, { foreignKey: 'nomePaciente', sourceKey: 'nome', as: 'prescricoesNome' });
Paciente.hasMany(Prescricao, { foreignKey: 'cniPaciente', sourceKey: 'cni', as: 'prescricoesCni' });
*/
app.use(errorController.getError404);

conexaoBD.authenticate()
.then( () => {
    console.log('succesful conection');
    conexaoBD.sync()
    .then( () => {
        console.log('Modelos sincronizados com sucesso!');
        app.listen(3002);
        
    })
    .catch(erro => {
        console.log(erro.message)
    })
    
})
.catch( (erro) => {
    console.log(erro.message);
    process.exit(1);
});
