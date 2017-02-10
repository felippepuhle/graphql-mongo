import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const Schema = new mongoose.Schema(
	{
	  title: {
	    type: String,
	    description: 'Post title',
	    required: true
	  },
	  content: {
	    type: String,
	    description: 'Post content',
	    required: true
	  },
	  person: {
	    type: ObjectId,
	    ref: 'Person',
	    indexed: true,
	    description: 'Person that created this post',
	    required: true
	  }
	},
	{
		collection: 'post',
		timestamps: {
	    	createdAt: 'createdAt',
	    	updatedAt: 'updatedAt',
		}
	}
);

export default mongoose.model('Post', Schema);