const Project = require("../../../models/project.model");
const createProjectController = async (req, res, next) => {
  try {
    const {
      title,
      details,
      category,
      liveLink,
      sourceCode,
      image,
      author,
      avatar,
      tags,
      backendSourceCode,
      longDetails,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !details ||
      !category ||
      !author ||
      !sourceCode ||
      !image ||
      !avatar ||
      !tags
    ) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Format tags
    const tag = tags.toLowerCase().split(",");

    // Create and save project
    const project = new Project({
      title,
      details,
      category,
      author,
      liveLink,
      sourceCode,
      image,
      avatar,
      tags: tag,
      backendSourceCode,
      longDetails,
    });
    // await project.save();
    console.log(project);

    // Send success response
    res.status(201).json({
      status: 201,
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createProjectController;
