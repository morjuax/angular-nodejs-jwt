import express from 'express';
const app = express();
const port = 3000 || process.env.port;
import './database';
import userRoute from './routes/userRoute';
import taskRoute from './routes/taskRoute';

app.use(express.json());

app.use('/api', userRoute)
app.use(taskRoute)

app.listen(port, () => {
  console.log('Server on port ', port);
});

