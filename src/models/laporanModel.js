import database from '../config/database.js';

const laporanModel = {
  getLaporanByIdUser: (id) => {
    const SQLQuery = `SELECT *
    FROM laporanharians
    JOIN users ON laporanharians.user_id = users.id
    WHERE users.id=?`;

    const values = [id];

    return database.db.execute(SQLQuery, values);
  },
  createLaporanByIdUser: (body) => {
    const SQLQuery = `
      INSERT INTO laporanharians (tanggal_h, foto_kegiatan_h, aktifitas_h, absen_h, user_id, status_id, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [body.tanggal_h, body.foto_kegiatan_h || null, body.aktifitas_h, body.absen_h, body.user_id, body.status_id, new Date(), new Date()];
    console.log(values);
    return database.db.execute(SQLQuery, values);
  },
};

export default laporanModel;
