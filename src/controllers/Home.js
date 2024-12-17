import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome:'Arthur',
      sobrenome:'Malizia',
      email:'arthur.mdx1234@gmail.com',
      idade:21,
      peso:'84.5',
      altura:'1.74'
    });
    res.json(novoAluno)
  }
}

export default new HomeController()