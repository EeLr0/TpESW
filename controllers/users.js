const Medico = require('../models/medico');

const Paciente = require('../models/prescricao');

//const Farmaceutico = require('../controllers/farmaceutico')


exports.getMedico = (req, res, next) => {
    const nome = req.params.nome;
    Medico.findOne({where: {
        nome: nome 
    }})
    .then((medico) =>{
        res.status(200).json({data:medico});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}

exports.getPaciente = (req, res, next) => {
    const nome = req.params.nome;
    Paciente.findOne({where: {
        nome: nome 
    }})
    .then((paciente) =>{
        res.status(200).json({data:paciente});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}

/* exports.getFarmaceutico = (req, res, next) => {
    const nome = req.params.nome;
    Farmaceutico.findOne({where: {
        nome: nome 
    }})
    .then((faraceutico) =>{
        res.status(200).json({data:farmaceutico});
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
} */

exports.postcriarMedico = (req, res, next) =>{
    const nome = req.body.nome;
    const especialidade = req.body.especialidade;
    const contacto = req.body.contacto;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    Medico.create({
        nome: nome,
        especialidade: especialidade,
        contacto: contacto,
        email: email,
        password: password
    })
    .then((resultado) => {
        console.log('medico criado');
        res.status(200).json({medico: resultado})
      })
      .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}

/*exports.postcriarPaciente = (req, res, next) =>{
    const nome = req.params.nome;
    const morada = req.params.morada;
    const datanascimento = req.params.datanascimento
    const contacto = req.params.contacto;
    const cni = req.params.cni
    const inps = req.params.inps
    
    Medico.create({
        nome: nome,
        morada: morada,
        datanascimento: datanascimento,
        contacto: contacto,
        cni: cni,
        inps: inps
    })
    .then((resultado) => {
        console.log('prescricao criada');
        res.status(200).json({prescricao: resultado})
      })
      .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}*/


/*exports.postEditPaciente = (req, res, next) => {
    const nome = req.params.nome;
    const morada = req.params.morada;
    const datanascimento = req.params.datanascimento
    const contacto = req.params.contacto;
    const cni = req.params.cni
    const inps = req.params.inps
  
    Product.findByPk(prodId)
    .then(paciente => {
        nome = nome,
        morada = morada,
        datanascimento = datanascimento,
        contacto = contacto,
        cni = cni,
        inps = inps
      return paciente.save();
    })
    .then(resultado => {
      console.log('prescricao actualizada');
      res.status(200).json({produto: resultado})
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}*/
      

/*exports.postEditMedico = (req, res, next) => {
    const nome = req.params.nome;
    const especialidade = req.params.especialidade;
    const contacto = req.params.contacto;

    Product.findByPk(prodId)
    .then(medico => {
        nome = nome,
        especialidade = especialidade,
        contacto = contacto
        
      return medico.save();
    })
    .then(resultado => {
      console.log('prescricao actualizada');
      res.status(200).json({produto: resultado})
    })
    .catch(erro => {
        res.status(500).json({error: 'Internal server error'})
    })
}*/