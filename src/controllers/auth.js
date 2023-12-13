import database from '../config/database.js';
import bcryptjs from 'bcryptjs';
import jwtToken from './jwtToken.js';

const auth = {
  loginUser: async (req, res) => {
    const { nisn, password } = req.body;

    if (nisn === undefined || nisn === '' || password === undefined || password === '') {
      return res.status(400).json('Invalid data!');
    }

    try {
      const user = await database.query(
        `
        SELECT id, password FROM users WHERE nisn = ?
      `,
        [nisn]
      );

      if (user.length === 0) {
        return res.status(401).json('Invalid NISN or password');
      }

      const passwordMatch = await bcryptjs.compare(password, user[0].password);

      if (passwordMatch) {
        const token = jwtToken.generateJwtToken(user[0].id);

        return res.status(200).json({ token, message: 'Login success!' });
      } else {
        return res.status(401).json('Invalid NISN or password');
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json('Internal Server Error');
    }
  },

  decodeToken: async (req, res) => {
    const { token } = req.params;
    try {
      const decodedToken = jwtToken.decodeJwtToken(token);
      res.json({
        message: 'DECODE TOKEN success',
        data: decodedToken,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default auth;
