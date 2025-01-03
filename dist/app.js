"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);

_dotenv2.default.config();

require('./database');

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _aluno = require('./routes/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _foto = require('./routes/foto'); var _foto2 = _interopRequireDefault(_foto);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(
      _helmet2.default.call(void 0, {
        crossOriginResourcePolicy: { policy: "cross-origin" }, // Permite carregar imagens de outra origem
      })
    );
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_expressdelay2.default.call(void 0, 2000));
    this.app.use(_express2.default.json());
    this.app.use(
      "/images",
      _express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", _home2.default);
    this.app.use("/users/", _user2.default);
    this.app.use("/tokens/", _token2.default);
    this.app.use("/alunos/", _aluno2.default);
    this.app.use("/fotos/", _foto2.default);
  }
}

exports. default = new App().app;
