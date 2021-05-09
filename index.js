import environmentConfig from './config/environment.js';
import express from 'express'
const app = express();

const PORT = environmentConfig.PORT || 3000;

/* MIDDLEWARES */
app.use(express.json())

/* ROUTES */
import userRoute from './routes/userRoute.js';
app.use('/api/users', userRoute)

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));

console.log(123);