import express from "express";
import pklController from "../controllers/pklController.js";

const router = express.Router();

router.get("/pkl", pklController.getAllPkls);
router.get("/pkl/:id", pklController.getPklById);
router.get("/pkl-kode/:kode_pkl", pklController.getPklByKodePkl);
router.get("/pkl-jurusan/:id", pklController.getPklByJurusan);
router.post("/pkl", pklController.createNewPkl);
router.patch("/pkl/:id", pklController.updatePkl);
router.delete("/pkl/:id", pklController.deletePkl);

export default router;
