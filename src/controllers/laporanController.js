import laporanModel from '../models/laporanModel.js';

const laporanController = {
  getLaporanByIdUser: async (req, res) => {
    const { id } = req.params;
    try {
      const [data] = await laporanModel.getLaporanByIdUser(id);
      res.json({
        message: 'GET laporan by id user success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },
  
  createLaporanByIdUser: async (req, res) => {
    const { body } = req;

    try {
      console.log(req.body);
      await laporanModel.createLaporanByIdUser(body);

      res.json({
        message: 'CREATE laporan success',
        data: body,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },
};

export default laporanController;
