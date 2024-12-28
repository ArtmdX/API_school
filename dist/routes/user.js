"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.index)
// router.get('/:id', userController.show)

router.post("/", _User2.default.store);
router.put("/:id", _loginRequired2.default, _User2.default.update);
router.delete("/:id", _loginRequired2.default, _User2.default.delete);

exports. default = router;

/*
Padrões de rotas
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
show -> mostra um usuário -> GET
delete -> Apaga um usuário -> DELETE
update -> atualiza um usuário -> PATCH ou PUT
*/
