"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);


var _Foto = require('../controllers/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const upload = _multer2.default.call(void 0, _multer4.default)

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _Foto2.default.store)

exports. default = router