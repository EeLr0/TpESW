const request = require('supertest');
const app = require('../app.js');
const sequelize = require('../util/database');

const Prescricao = require('../models/prescricao.js');

beforeAll(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

afterAll(async () => {
    try {
        await sequelize.close();
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
});

prescricao = {
    medicamentos: 'Amoxicilina, Azitromicina',
    nome: 'Michael Brown',
    cni: '987654321',
}

medicamentos = {
    medicamentos: 'Phenergan, Euphon'
}

nome = 'Michael Brown'
cni = '987654321'

describe ('Teste Rotas prescricao', () => {
    it ('Criar prescricao', async() =>{
        const resultado = await request(app)
            .post('/criar-prescricao')
            .send(prescricao)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('prescricao')
    })

    it ('Editar prescricao', async() =>{
        const resultado = await request(app)
            .post('/editar-prescricao')
            .send(medicamentos)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('prescricao')
    })

    it ('Obter prescricao por nome', async() =>{
        const resultado = await request(app).get('/prescricoes/get-nome='+nome)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('data')
    })

    it ('Obter prescricao por cni', async() =>{
        const resultado = await request(app).get('/prescricoes/get-cni='+cni)
        expect(resultado.statusCode).toEqual(200)
        expect(resultado.body).toHaveProperty('data')
    })

})