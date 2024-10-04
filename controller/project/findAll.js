const Project = require("../../models/project.model");

const findAllProjectController = async (req, res, next) => {
  try {
    const project = await Project.find().sort({ createdAt: -1 }).exec();

    const { search } = req.query;

    if (search) {
      const findProject = await Project.find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          // { details: { $regex: search, $options: "i" } },
          // { category: { $regex: search, $options: "i" } },
        ],
      });
      if (findProject.length === 0) {
        return res.status(404).json({
          status: 404,
          success: false,
          search: `This is you search (${search})`,
          message: "Project not found",
        });
      }

      if (!findProject) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: "Project not found",
        });
      }
      return res.status(200).json({
        count: findProject.length,
        status: 200,
        success: true,
        message: "Project found successfully!",
        project: findProject,
      });
    }

    return res.status(200).json({
      count: project.length,
      status: 200,
      success: true,
      message: "Project fetching successfully!",
      project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findAllProjectController;
