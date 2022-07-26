// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import userRoutes from './server/routes/user'
import medicineRoutes from './server/routes/medicine';

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
// set up mongoose
mongoose.connect('mongodb://localhost/projectsupport')
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
// set up port
const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.use('/api/', medicineRoutes);
app.use('/api/',userRoutes);

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});