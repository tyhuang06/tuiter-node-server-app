import mongoose from 'mongoose';
import TuitSchema from './tuits-schema.js'; // import the schema

const TuitModel = mongoose.model('TuitModel', TuitSchema); // create the model

export default TuitModel; // export the model
