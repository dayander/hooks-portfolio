const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    projectName: String,
    companyName: String,
    projectHeading: String,
    challengeHeading: String,
    challenge: String,
    approachHeading: String,
    approach: String,
    outcomeHeading: String,
    outcome: String,
    tags: Array,
    headingImg: {imgPath:String, altText: String},
    address: String
});

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;