import mysql from 'mysql2/promise';

const database = {
  db: mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'pklsmkn3bangkalan',
    password: '', //!sdw%2sdscas.`
    connectionLimit: 10,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  }),

  query: async (query, value) => {
    try {
      const [executeQuery] = await database.db.query(query, value ?? []); // hasil dari query
      return executeQuery;
    } catch (error) {
      console.log(error);
    }
  },
};
export default database;