import database from "../config/database.js";

const jurusanModel = {
  getAllJurusan: () => {
    const SQLQuery = "SELECT * from jurusans";

    return database.db.execute(SQLQuery);
  },

  getJurusanById: (id) => {
    const SQLQuery = `SELECT * from jurusans WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },

  createNewJurusan: (body) => {
    const SQLQuery = `INSERT INTO jurusans (nama_jurusan, gambar_jurusan, createdAt, updatedAt) VALUES (?, ?, ?)`;
    const values = [body.nama_jurusan, new Date(), new Date()];

    return database.db.execute(SQLQuery, values);
  },

  updateJurusan: (body, id) => {
    const SQLQuery = `UPDATE jurusans SET nama_jurusan=?, updatedAt=? WHERE id=?`;
    const values = [body.nama_jurusan, new Date(), id];

    return database.db.execute(SQLQuery, values);
  },

  deleteJurusan: (id) => {
    const SQLQuery = `DELETE FROM jurusans WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },
};

export default jurusanModel;
