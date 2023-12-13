import express from 'express';
import perusahaanRoutes from './perusahaanRoutes.js';
import userRoutes from './userRoutes.js';
import auth from './auth.js';
import laporanRoutes from './laporanRoutes.js';

const app = express();
const apiUrl = '/api/v1';

app.use(apiUrl, auth);
app.use(apiUrl, userRoutes);
app.use(apiUrl, perusahaanRoutes);
app.use(apiUrl, laporanRoutes);

export default app;
