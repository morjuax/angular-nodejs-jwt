import express from 'express';
const app = express();
const port = 3000 || process.env.port;
import './database';
import userRoute from './routes/userRoute';
import taskRoute from './routes/taskRoute';
import cors from 'cors'

app.use(cors());
app.use(express.json());

app.use('/api', userRoute)
app.use('/api', taskRoute)


app.listen(port, () => {
  console.log('Server on port ', port);
});

