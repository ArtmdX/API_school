import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model{
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue:'',
        validate:{
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue:'',
        validate:{
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue:'',
        unique:{
          msg: 'E-mail já existe'
        },
        validate:{
          isEmail: {
            msg: 'Email precisa ser válido.'
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue:'',
        validate:{
          isInt:{
            msg: 'Insira uma idade válida.'
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue:'',
        validate:{
          isFloat: {
            msg: 'Insira um peso válido.'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue:'',
        validate:{
          isFloat: {
            msg: 'Insira uma altura válida.'
          }
        }
      },
    }, {
      sequelize,
    })
    return this
  }
}