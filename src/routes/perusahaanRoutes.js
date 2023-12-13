import express from "express";
import perusahaanController from "../controllers/perusahaanController.js";

const router = express.Router();

router.get('/perusahaan', perusahaanController.getAllPerusahaans);
router.get('/perusahaan/:id', perusahaanController.getPerusahaanById);
router.get('/perusahaan-jurusan/:id', perusahaanController.getPerusahaanByJurusan);
router.post('/perusahaan', perusahaanController.createNewPerusahaan);
router.patch('/perusahaan/:id', perusahaanController.updatePerusahaan);
router.delete('/perusahaan/:id', perusahaanController.deletePerusahaan);

export default router;