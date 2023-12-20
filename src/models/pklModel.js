import database from "../config/database.js";

const pklModel = {
  getAllPkl: () => {
    const SQLQuery = "SELECT * from pkls";

    return database.db.execute(SQLQuery);
  },

  getPklById: (id) => {
    const SQLQuery = `SELECT * from pkls WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },

  getPklByKodePkl: (kodePkl) => {
    const SQLQuery = `SELECT * from pkls WHERE kode_pkl=?`;
    const values = [kodePkl];

    return database.db.execute(SQLQuery, values);
  },

  getPklByJurusan: (idJurusan) => {
    const SQLQuery = `SELECT *
        FROM pkls
        JOIN perusahaans ON perusahaans.id = pkls.perusahaan_id
        JOIN jurusans ON jurusans.id = perusahaans.jurusan_id
        WHERE perusahaans.jurusan_id=?
        `;
    const values = [idJurusan];

    return database.db.execute(SQLQuery, values);
  },

  createNewPkl: (body) => {
    const SQLQuery = `INSERT INTO pkls (kode_pkl, bidang_pkl, syarat_pkl, gambar_pkl, tgl_mulai, tgl_selesai, perusahaan_id, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      body.kode_pkl,
      body.bidang_pkl,
      body.syarat_pkl,
      body.gambar_pkl,
      body.tgl_mulai,
      body.tgl_selesai,
      body.perusahaan_id,
      new Date(),
      new Date(),
    ];

    return database.db.execute(SQLQuery, values);
  },

  updatePkl: (body, id) => {
    const SQLQuery = `UPDATE pkls SET kode_pkl=?, bidang_pkl=?, syarat_pkl=?, gambar_pkl=?, tgl_mulai=?, tgl_selesai=?, updatedAt=? WHERE id=?`;
    const values = [
      body.kode_pkl,
      body.bidang_pkl,
      body.syarat_pkl,
      body.gambar_pkl,
      body.tgl_mulai,
      body.tgl_selesai,
      new Date(),
      id,
    ];

    return database.db.execute(SQLQuery, values);
  },

  deletePkl: (id) => {
    const SQLQuery = `DELETE FROM pkls WHERE id=${id}`;

    return database.db.execute(SQLQuery);
  },
};

export default pklModel;
