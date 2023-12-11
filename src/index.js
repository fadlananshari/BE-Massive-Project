import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import logRequest from './middleware/logs.js';


const app = express();
const PORT = 4000;
const server = createServer(app)

app.use(logRequest)
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

server.listen(PORT, () => console.log(`Server berhasil dirunning di http://localhost:${PORT}`));
