const Project = require("../../../models/project.model");
const findProjectController = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }).exec();
    return res.status(200).json({
      status: 200,
      count: projects.length,
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findProjectController;
