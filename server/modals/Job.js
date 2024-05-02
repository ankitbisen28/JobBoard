const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  salary: {
    type: Number
  },
  // Reference to the user who posted the job
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Add more fields if needed, such as job type, requirements, etc.
  // ...
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
