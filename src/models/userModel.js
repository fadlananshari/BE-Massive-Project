import database from '../config/database.js';

const userModel = {
  getAllUsers: () => {
    const SQLQuery = 'SELECT * from users';

    return database.db.execute(SQLQuery);
  },

  getUserById: (id) => {
    const SQLQuery = `SELECT * from users WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },

  createNewUser: (body) => {
    const SQLQuery = `INSERT INTO users (nisn, nama, password, email, jenis_kelamin, alamat, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [body.nisn, body.nama, body.password, body.email, body.jenis_kelamin, body.alamat, new Date(), new Date()];

    return database.db.execute(SQLQuery, values);
  },

  updateUser: (body, id) => {
    const SQLQuery = `UPDATE users SET nisn=?, nama=?, password=?, email=?, jenis_kelamin=?, alamat=?, updatedAt=? WHERE id=?`;
  
    // Pastikan bahwa semua parameter memiliki nilai yang valid
    const values = [
      body.nisn || null,
      body.nama || null,
      body.password || null,
      body.email || null,
      body.jenis_kelamin || null,
      body.alamat || null,
      new Date(),
      id
    ];
  
    return database.db.execute(SQLQuery, values);
  },
  

  deleteUser: (id) => {
    const SQLQuery = `DELETE FROM users WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },
};

export default userModel;
