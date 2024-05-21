const express = require('express');

const presController = require('../controllers/prescricoes');

const router = express.Router();

router.get('/prescricoes/:cni', presController.getPrescricaoByCNI);

router.get('/prescricoes/:nomePaciente', presController.getPrescricaoByNome);

router.post('/criar-prescricao', presController.postcriarPrescricao);

router.post('/editar-prescricao', presController.postEditPrescricao);

module.exports = router;