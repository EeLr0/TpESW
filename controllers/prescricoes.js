const Prescricao = require('../models/prescricao');


exports.getPrescricaoByCNI = (req, res, next) =>{
    const cni = req.params.cni;
    Prescricao.findAll({where: {
        cniPaciente: cni
    }})
    .then((prescricoes) =>{
        res.status(200).json({data:prescricoes});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
};

exports.getPrescricaoByNome = (req, res, next) =>{
    const nomePaciente = req.params.nomePaciente;
    Prescricao.findAll({where: {
        nomePaciente: nomePaciente 
    }})
    .then((prescricoes) =>{
        res.status(200).json({data:prescricoes});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
};

exports.postcriarPrescricao = (req, res, next) =>{
    const medicamentos = req.params.medicamentos;
    const nomeMedico = req.params.nomeMedico;
    const nomePaciente = req.params.nomePaciente;
    const cni = req.params.cni

    Prescricao.create({
        medicamentos: medicamentos,
        nomeMedico: nomeMedico,
        nomePaciente: nomePaciente,
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
    const medicamentos = req.params.medicamentos;
    const nomeMedico = req.params.nomeMedico;
    const nomePaciente = req.params.nomePaciente;
    const cni = req.params.cni
  
    Product.findByPk(prodId)
    .then(prescricao => {
        prescricao.medicamentos = medicamentos,
        prescricao.nomeMedico = nomeMedico,
        prescricao.nomePaciente = nomePaciente,
        prescricao.cni = cni;
      return prescricao.save();
    })
    .then(resultado => {
      console.log('prescricao actualizada');
      res.status(200).json({produto: resultado})
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}
      
  