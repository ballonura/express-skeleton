import environmentConfig from './config/environment.js';
import express from 'express'
const app = express();

const PORT = environmentConfig.PORT || 3000;

/* MIDDLEWARES */
app.use(express.json())

/* ROUTES */
import allRoutes from './routes/index.js';
allRoutes.forEach(({ path, router }) => app.use(`/api${path}`, router));

app.listen(PORT);