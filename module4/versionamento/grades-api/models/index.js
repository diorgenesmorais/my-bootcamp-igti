import mongoose from 'mongoose';
import studentModel from './student.model.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.student = studentModel(mongoose);

export { db };
