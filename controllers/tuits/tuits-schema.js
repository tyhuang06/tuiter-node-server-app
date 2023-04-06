import mongoose from 'mongoose';

const TuitSchema = new mongoose.Schema(
	{
		tuit: String,
		likes: Number,
		liked: Boolean,
	},
	{ collection: 'tuits' }
);

export default TuitSchema;
