import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
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
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }
  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
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
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.userId);

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

export default new UserController();
