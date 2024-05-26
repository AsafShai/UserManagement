import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/usersRoutes'
import groupsRoutes from './routes/groupsRoutes'
import { PORT } from './config/config';
import { connectMongoDb } from './config/dbConnect';


const app = express();
app.use(express.json());
app.use(cors());

connectMongoDb();

app.use("/users", usersRoutes);
app.use("groups/", groupsRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `)
})

export default app;