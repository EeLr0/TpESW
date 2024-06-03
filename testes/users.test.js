const request = require('supertest');
const app = require('../app.js');
const sequelize = require('../util/database');

const Medico = require('../models/medico');
beforeAll(async () => {
    
    await sequelize.sync({ force: true });
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
describe ('Teste Rotas', () => {
    it ('Criar Medico', async() => {
        //codigo para teste
        const resultado = await request(app)
            .post('/criar-medico')
            .send(medico)
        expect(resultado.statusCode).toEqual(200)
        
    })
})