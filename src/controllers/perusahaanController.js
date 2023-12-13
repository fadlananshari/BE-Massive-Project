import perusahaanModel from '../models/perusahaanModel.js';


const perusahaanController = {
  getAllPerusahaans: async (req, res, next) => {
    try {
      const [data] = await perusahaanModel.getAllPerusahaan();

      res.json({
        message: 'GET all perusahaan success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  getPerusahaanById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [data] = await perusahaanModel.getPerusahaanById(id);

      res.json({
        message: 'GET perusahaan by id success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  getPerusahaanByJurusan: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [data] = await perusahaanModel.getPerusahaanByJurusan(id);

      res.json({
        message: 'GET perusahaan by jurusan success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  createNewPerusahaan: async (req, res) => {
    const { body } = req;

    try {
      await perusahaanModel.createNewPerusahaan(body);

      res.json({
        message: 'CREATE new perusahaan success',
        data: { body },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },


  // UPDATE - PATCH
  updatePerusahaan: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      await perusahaanModel.updatePerusahaan(body, id);
      res.json({
        message: 'UPDATE perusahaan success',
        data: {
          id: id,
          ...body,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  // DELETE - DELETE
  deletePerusahaan: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      await perusahaanModel.deletePerusahaan(id);
      res.json({
        message: 'DELETE perusahaan success',
        data: {
          id: id,
          ...body,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },
};

export default perusahaanController;