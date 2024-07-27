const Project = require("../../models/project.model");

const findAllProjectController = async (req, res, next) => {
  try {
    const project = await Project.find();

    return res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = findAllProjectController;
