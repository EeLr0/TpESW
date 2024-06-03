const express = require('express');

const userController = require('../controllers/users');

const router = express.Router();


router.get('/get-medico', userController.getMedico);

router.get('/get-paciente', userController.getPaciente);

router.post('/criar-medico', userController.postcriarMedico);

router.post('/criar-paciente', userController.postcriarPaciente);
/*
router.post('/editar-paciente', userController.postEditPaciente);

router.post('/editar-medico', userController.postEditMedico);
*/
module.exports = router;