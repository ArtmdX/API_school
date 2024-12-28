import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database";

import cors from "cors";
import helmet from "helmet";
import express from "express";

import homeRoutes from "./routes/home";
import userRoutes from "./routes/user";
import tokenRoutes from "./routes/token";
import alunoRoutes from "./routes/aluno";
import fotoRoutes from "./routes/foto";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(
      helmet.default.crossOriginResourcePolicy({ policy: "cross-origin" })
    );
    this.app.use(
      helmet.default.crossOriginOpenerPolicy({ policy: "unsafe-none" })
    );
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      "/images",
      express.static(resolve(__dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
