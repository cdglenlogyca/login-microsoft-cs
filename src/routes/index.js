import { Router } from "express";

import {
  renderAboutPage,
  renderIndexPage,
  renderNewEntryPage,
  createNewEntry,
  deleteBook,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/consulta-de-registros-importantes", renderIndexPage);

router.get("/about", renderAboutPage);

router.get("/iniciar-sesion", renderNewEntryPage);

router.post("/iniciar-sesion", createNewEntry);

router.get("/delete/:id", deleteBook);

export default router;
