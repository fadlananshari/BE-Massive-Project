import jurusanModel from "../models/jurusanModel.js";

const jurusanController = {
  getAllJurusan: async (req, res, next) => {
    try {
      const [data] = await jurusanModel.getAllJurusan();

      res.json({
        message: "GET all jurusan success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  getJurusanById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [data] = await jurusanModel.getJurusanById(id);

      res.json({
        message: "GET jurusan by id success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  createNewJurusan: async (req, res) => {
    const { nama_jurusan } = req.body;
    if (nama_jurusan === undefined || nama_jurusan === "")
      return res.status(400).json("Invalid data!");

    try {
      const isDuplicate = await database.query(
        `
            SELECT id FROM jurusans WHERE nama_jurusan = ?
        `,
        [nama_jurusan]
      );

      if (isDuplicate.length > 0)
        return res.status(400).json("Jurusan already exists!");

      await jurusanModel.createNewJurusan({ nama_jurusan: nama_jurusan });

      res.json({
        message: "CREATE new jurusan success",
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  updateJurusan: async (req, res) => {
    const { nama_jurusan } = req.body;
    const { id } = req.params;
    if (nama_jurusan === undefined || nama_jurusan === "")
      return res.status(400).json("Invalid data!");

    try {
      const isDuplicate = await database.query(
        `
            SELECT id FROM jurusans WHERE nama_jurusan = ?
        `,
        [nama_jurusan]
      );

      if (isDuplicate.length > 0)
        return res.status(400).json("Jurusan already exists!");
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }

    try {
      await jurusanModel.updateJurusan({ nama_jurusan: nama_jurusan }, id);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }

    res.json({
      message: "UPDATE jurusan success",
    });
  },

  deleteJurusan: async (req, res) => {
    const { id } = req.params;

    try {
      await jurusanModel.deleteJurusan(id);
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }

    res.json({
      message: "DELETE jurusan success",
    });
  },
};

export default jurusanController;
