const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');

const userRoutes = require('./routes/users');
const prescricoesRoute = require('./routes/prescricoes');
const autenticarRoute = require('./routes/auntenticar');
const errorController = require('./controllers/error');
const conexaoBD = require('./util/database');

const Prescricao = require('./models/prescricao');
const Paciente = require('./models/paciente');
const Medico = require('./models/medico');
const utz = require('./schema/schema');

function runSeedScript() {
    return new Promise((resolve, reject) => {
      exec('npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing seed script: ${error}`);
          reject(error);
        }
        console.log(`Seed script output: ${stdout}`);
        console.error(`Seed script errors: ${stderr}`);
        resolve();
      });
    });
  }

const app = express();
const connectDButz = require('./util/utzdbconection')

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(userRoutes);
app.use(prescricoesRoute);
app.use(autenticarRoute);

app.use(errorController.getError404);

connectDButz();


conexaoBD.authenticate()
.then( () => {
    console.log('succesful conection');
    conexaoBD.sync({force: true})
    .then( () => {
        console.log('Modelos sincronizados com sucesso!');
        setTimeout(async () => {
            try {
              await runSeedScript();
              console.log('Seed script completed successfully.');
            } catch (err) {
              console.error('Seed script failed:', err);
            }
          }, 5000); 
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

module.exports = app;