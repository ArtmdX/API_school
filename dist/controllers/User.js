"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      res.json({ id, nome, email });
    } catch (e) {
      if (e.errors) {
        res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } else {
        res.status(500).json({
          message: "Erro inesperado ao cadastrar usuário",
          details: e.message,
        });
      }
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll();
      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
  // Update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const updatedUser = await user.update(req.body);
      const { id, nome, email } = updatedUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
  // Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      await user.destroy();
      return res.json("Usuário deletado com sucesso.");
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
}

exports. default = new UserController();
