const Project = require("../../models/project.model");
const mongoose = require("mongoose");
const updateProjectController = async (req, res, next) => {
  try {
    const {
      userId,
      title,
      details,
      category,
      author,
      liveLink,
      sourceCode,
      image,
      avatar,
    } = req.body;

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({
        error: 404,
        message: "This project not found.",
      });
    }

    const project = await Project.findById({ _id: userId });

    project.title = title || project.title;
    project.details = details || project.details;
    project.category = category || project.category;
    project.author = author || project.author;
    project.liveLink = liveLink || project.liveLink;
    project.sourceCode = sourceCode || project.sourceCode;
    project.image = image || project.image;
    project.avatar = avatar || project.avatar;

    await project.save();

    return res.status(201).redirect("/project");
  } catch (error) {
    next(error);
  }
};

module.exports = updateProjectController;
