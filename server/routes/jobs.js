const express = require('express');
const router = express.Router();
const Job = require('../modals/Job'); // Assuming your job schema is in a file named 'job.js'
const Application = require('../modals/Application')

const multer = require('multer');
const upload = multer({ dest: 'public/uploads' }); 

router.post('/apply-job', upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'coverLetter', maxCount: 1 }]), async (req, res) => {
  try {
    // Extract application details from the request body
    const { jobId, userId } = req.body;
    const resume = req.files['resume'][0].path; // Path to uploaded resume file
    const coverLetter = req.files['coverLetter'] ? req.files['coverLetter'][0].path : null; // Path to uploaded cover letter file, if provided

    // Create a new application instance
    const newApplication = new Application({
      jobId,
      userId,
      resume,
      coverLetter
    });

    // Save the new application to the database
    const savedApplication = await newApplication.save();

    res.status(201).json(savedApplication); // Respond with the saved application
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route to post a new job
router.post('/post', async (req, res) => {
  try {
    // Extract job details from the request body
    const { title, description, location, salary, userId } = req.body;

    // Create a new job instance
    const newJob = new Job({
      title,
      description,
      location,
      salary,
      postedBy: userId // Assuming you pass the userId of the employer who is posting the job
    });

    // Save the new job to the database
    const savedJob = await newJob.save();

    res.status(201).json(savedJob); // Respond with the saved job
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
