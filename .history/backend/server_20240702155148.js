// const express = require('express');
import express from 'express';
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// const todoRoutes = require('./routes/todoRoutes');
import todoRoutes from './routes/todoRoutes';
// const errorMiddleware = require('./middleware/errorMiddleware');
import errorMiddleware from './middleware/errorMiddleware';
// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3306;
// Middleware
app.use(bodyParser.json());
// Routes
app.use('/todos', todoRoutes);
// Error middleware
app.use(errorMiddleware);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
