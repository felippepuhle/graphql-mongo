import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const Schema = new mongoose.Schema(
	{
	  firstName: {
	    type: String,
	    description: 'Person first name',
	    required: true
	  },
	  lastName: {
	    type: String,
	    description: 'Person last name',
	    required: true
	  },
	  email: {
	    type: String,
	    description: 'Person email'
	  },
	},
	{
		collection: 'person',
		timestamps: {
	    	createdAt: 'createdAt',
	    	updatedAt: 'updatedAt',
		}
	}
);

export default mongoose.model('Person', Schema);