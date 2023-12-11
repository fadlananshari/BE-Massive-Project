import express from 'express';
import userRoutes from './userRoutes.js';
import auth from './auth.js';

const app = express();
const apiUrl = '/api/v1';

app.use(apiUrl, userRoutes);
app.use(apiUrl, auth);

export default app;
