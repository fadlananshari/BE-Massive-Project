import userModel from '../models/UserModel.js';
import database from '../config/database.js';
import bcryptjs from 'bcryptjs';

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const [data] = await userModel.getAllUsers();

      res.json({
        message: 'GET all users success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  getUserById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const [data] = await userModel.getUserById(id);

      res.json({
        message: 'GET user by id success',
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  createNewUser: async (req, res) => {
    const { nisn, nama, password, email, alamat, jenis_kelamin } = req.body;
    if (nisn === undefined || nisn === '' || nama === undefined || nama === '' || password === undefined || password === '' || email === undefined || email === '' || jenis_kelamin === undefined || jenis_kelamin === '')
      return res.status(400).json('Invalid data!');

    try {
      const isDuplicate = await database.query(
        `
        SELECT id FROM users WHERE nisn = ?
    `,
        [nisn]
      );

      if (isDuplicate.length > 0) return res.status(400).json('User already exists!');

      const salt = await bcryptjs.genSalt(12);
      const hash = await bcryptjs.hash(password, salt);

      await userModel.createNewUser({ nisn: nisn, nama: nama, password: hash, email: email, jenis_kelamin: jenis_kelamin, alamat:alamat });

      res.json({
        message: 'CREATE new user success',
        data: { nisn: nisn, nama: nama, password: hash, email: email, jenis_kelamin: jenis_kelamin, alamat:alamat },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
      });
    }
  },

  // UPDATE - PATCH
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      await userModel.updateUser(body, id);
      res.json({
        message: 'UPDATE user success',
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
  deleteUser: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      await userModel.deleteUser(id);
      res.json({
        message: 'DELETE user success',
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

export default userController;
