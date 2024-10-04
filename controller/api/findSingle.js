const Project = require("../../models/project.model");

const findProjectBySearchQuery = async (req, res, next) => {
  try {
    const { search } = req.query;
    const findProject = await Project.findOne({ title: search });
    if (!findProject) {
      return res
        .status(404)
        .json({ status: 404, success: false, message: "Project not found" });
    }
  } catch (error) {
    next(error);
  }
};

const findAllProjectControllerById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({ _id: id });

    return res
      .status(200)
      .json({
        status: 200,
        success: true,
        message: "Project found successfully!",
        project,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { findAllProjectControllerById };
