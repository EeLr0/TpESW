const Prescricao = require('../models/prescricao');


exports.getPrescricaoByCNI = (req, res, next) =>{
    const cni = req.query.cni;
    Prescricao.findAll({where: {
        cni: cni
    }})
    .then((prescricoes) =>{
        res.status(200).json({data:prescricoes});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
};

exports.getPrescricaoByNome = (req, res, next) =>{
    const nome = req.query.nomePaciente;
    Prescricao.findAll({where: {
        nome: nome 
    }})
    .then((prescricoes) =>{
        res.status(200).json({data:prescricoes});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
};

exports.postcriarPrescricao = (req, res, next) =>{
    const medicamentos = req.body.medicamentos;
    const nome = req.body.nome;
    const cni = req.body.cni
    console.log(req.body)
    Prescricao.create({
        medicamentos: medicamentos,
        nome: nome,
        cni: cni
    })
    .then((resultado) => {
        console.log('prescricao criada');
        res.status(200).json({prescricao: resultado})
      })
      .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}

exports.postEditPrescricao = (req, res, next) => {
    const id = req.body.id
    const medicamentos = req.body.medicamentos;

  
    Prescricao.findByPk(id)
    .then(prescricao => {
        prescricao.medicamentos = medicamentos;
      return prescricao.save();
    })
    .then(resultado => {
      console.log('prescricao actualizada');
      res.status(200).json({prescricao: resultado})
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}
      
  