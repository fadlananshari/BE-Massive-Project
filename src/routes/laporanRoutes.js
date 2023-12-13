import express from "express";
import laporanController from "../controllers/laporanController.js";

const router = express.Router();

router.get('/laporan/:id', laporanController.getLaporanByIdUser);
router.post('/laporan', laporanController.createLaporanByIdUser);



export default router;