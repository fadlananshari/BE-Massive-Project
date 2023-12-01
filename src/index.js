import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server berhasil dirunning di port http://localhost:${PORT}`));
