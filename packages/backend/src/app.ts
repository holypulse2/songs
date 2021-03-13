import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import allRoutes from './routes';
import { FRONTEND_BUILD_PATH } from './config';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(FRONTEND_BUILD_PATH));
app.get("/", (req, res) => {
    res.sendFile("index.html");
});
app.use('/api', allRoutes);
app.use('*', (err, req, res, next) => {
	console.log('ROUTE NOT FOUND');
  next(err);
});

export default app;
