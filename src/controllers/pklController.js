import pklModel from "../models/pklModel.js";

const pklController = {
  getAllPkls: async (req, res, next) => {
    try {
      const [data] = await pklModel.getAllPkl();

      res.json({
        message: "GET all pkl success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  getPklById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [data] = await pklModel.getPklById(id);

      res.json({
        message: "GET pkl by id success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  getPklByKodePkl: async (req, res, next) => {
    const { kode_pkl } = req.params;
    try {
      const [data] = await pklModel.getPklByKodePkl(kode_pkl);

      res.json({
        message: "GET pkl by kode pkl success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  getPklByJurusan: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [data] = await pklModel.getPklByJurusan(id);

      res.json({
        message: "GET pkl by jurusan success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  createNewPkl: async (req, res) => {
    const { body } = req;

    try {
      await pklModel.createNewPkl(body);

      res.json({
        message: "CREATE new pkl success",
        data: { body },
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  updatePkl: async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    try {
      await pklModel.updatePkl(body, id);

      res.json({
        message: "UPDATE pkl success",
        data: { body },
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },

  deletePkl: async (req, res) => {
    const { id } = req.params;

    try {
      await pklModel.deletePkl(id);

      res.json({
        message: "DELETE pkl success",
        data: { id },
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
    }
  },
};

export default pklController;
