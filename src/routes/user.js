import { Router } from "express";
import userController from "../controllers/User";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir
// router.get('/', userController.index)
// router.get('/:id', userController.show)

router.post("/", userController.store);
router.put("/:id", loginRequired, userController.update);
router.delete("/:id", loginRequired, userController.delete);

export default router;

/*
Padrões de rotas
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
show -> mostra um usuário -> GET
delete -> Apaga um usuário -> DELETE
update -> atualiza um usuário -> PATCH ou PUT
*/
