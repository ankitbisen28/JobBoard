const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['job-seeker', 'employer', 'admin'],
    default: 'job-seeker'
  },
   // Add more fields based on user type
  // For example, employer specific fields
  companyName: {
    type: String,
  },
  companyDescription: {
    type: String,
  },
  // Job seeker specific fields
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  bio: {
    type: String
  }
}, { timestamps: true });

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
