import express from 'express';
import cors from 'cors';
import usersRoute from './routes/usersRoutes'
import { PORT } from './config/config';
import { connectMongoDb } from './config/dbConnect';


const app = express();
app.use(express.json());
app.use(cors());

connectMongoDb();

app.use("/users", usersRoute);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `)
})

export default app;