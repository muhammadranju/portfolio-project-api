const Project = require("../../../models/project.model");

const findAllProjectController = async (req, res, next) => {
  try {
    const { search } = req.query;
    let projects;

    if (search) {
      projects = await Project.find({
        $or: [
          { title: { $regex: search, $options: "i" } },
          { tags: { $regex: search, $options: "i" } },
          // { details: { $regex: search, $options: "i" } },
          // { category: { $regex: search, $options: "i" } },
        ],
      });

      if (projects.length === 0) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `No projects found for search: ${search}`,
        });
      }
    } else {
      projects = await Project.find().sort({ createdAt: -1 });
    }

    res.status(200).json({
      count: projects.length,
      status: 200,
      success: true,
      message: search
        ? "Projects found successfully!"
        : "Projects fetched successfully!",
      projects,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findAllProjectController;
