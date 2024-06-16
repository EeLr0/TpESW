const request = require('supertest');
const app = require('../app.js');
const sequelize = require('../util/database');

Medico = require('../models/medico.js')

beforeAll(async () => {
    try {
      await sequelize.sync({ force: true });
    } catch (error) {
      console.error('Error during synchronization:', error);
    }
  });
  
  afterAll(async () => {
    await sequelize.close();
  });

const medico = {
    nome: "john doe",
    especialidade: "qualquer",
    contacto: 999999,
    email: "jonhdoe@email.com",
    password: "123"
}

const paciente = {
    "nome": "john doe",
    "morada": "qualquer",
    "datanascimento": "24/10/2003",
    "contacto": 999999,
    "cni": "12345",
    "inps": "true"
}

medNome = 'john doe'
pacNome = 'john doe'
describe ('Teste Rotas users(Medico)', () => {
    it ('Criar Medico', async() => {
        //codigo para teste
        const resultado = await request(app)
            .post('/criar-medico')
            .send(medico)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('medico')
        
    })

    it ('Obter Medico', async() => {
        //codigo para teste
        const resultado = await request(app).get('/get-medico?nome='+medNome)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('data')
        
    })

    it ('Criar Paciente', async() => {
        //codigo para teste
        const resultado = await request(app)
            .post('/criar-paciente')
            .send(paciente)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('paciente')
        
    })
    it ('Obter Paciente', async() => {
        //codigo para teste
        const resultado = await request(app).get('/get-paciente?nome='+pacNome)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('data')
        
    })
    
})

/*describe ('Teste Rotas users(Farmaceutico)', () => {

})*/