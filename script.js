import environmentConfig from './config/environment.js';
import express from 'express'
const app = express();

const PORT = environmentConfig.PORT || 3000;

/* MIDDLEWARES */
app.use(express.json())

/* ROUTES */
const routes = {
	INDEX: '/',
	USERS: '/api/users'
}

/* ROUTES */
import usersRoutes from './routes/users.js';
app.use(routes.USERS, usersRoutes)

app.get(routes.INDEX, (req, res) => {
	res.json({ data: 'Health Checked!!' })
});

app.post('/', (req, res) => {
	res.json(req.body)
});

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`));