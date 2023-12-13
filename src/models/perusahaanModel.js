import database from '../config/database.js';

const perusahaanModel = {
  getAllPerusahaan: () => {
    const SQLQuery = 'SELECT * from perusahaans';

    return database.db.execute(SQLQuery);
  },

  getPerusahaanById: (id) => {
    const SQLQuery = `SELECT * from perusahaans WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },

  getPerusahaanByJurusan: (idJurusan) => {
    const SQLQuery = `SELECT *
    FROM perusahaans
    JOIN pkls ON perusahaans.id = pkls.perusahaan_id
    WHERE pkls.jurusan_id=?;
    `;
    const values = [idJurusan];

    return database.db.execute(SQLQuery, values);
  },

  createNewPerusahaan: (body) => {
    const SQLQuery = `INSERT INTO perusahaans (nama_perusahaan, alamat, email, no_hp, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [body.nama_perusahaan, body.alamat, body.email, body.no_hp, new Date(), new Date()];

    return database.db.execute(SQLQuery, values);
  },

  updatePerusahaan: (body, id) => {
    const SQLQuery = `UPDATE perusahaans SET nama_perusahaan=?, alamat=?, email=?, no_hp=?, updatedAt=? WHERE id=?`;
    const values = [body.nama_perusahaan, body.alamat, body.email, body.no_hp, new Date(), id];

    return database.db.execute(SQLQuery, values);
  },

  deletePerusahaan: (id) => {
    const SQLQuery = `DELETE FROM perusahaans WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },
};

export default perusahaanModel;
