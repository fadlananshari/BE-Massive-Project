import express from "express";
import jurusanController from "../controllers/jurusanController.js";

const router = express.Router();

router.get("/jurusan", jurusanController.getAllJurusan);
router.get("/jurusan/:id", jurusanController.getJurusanById);
router.post("/jurusan", jurusanController.createNewJurusan);
router.patch("/jurusan/:id", jurusanController.updateJurusan);
router.delete("/jurusan/:id", jurusanController.deleteJurusan);

export default router;
