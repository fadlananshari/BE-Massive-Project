import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const User = db.define(
  'users',
  {
    nisn: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    TTL: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    id_class: DataTypes.STRING,
    id_document: DataTypes.STRING,
    id_kegiatan: DataTypes.STRING
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
