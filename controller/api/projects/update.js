const Project = require("../../../models/project.model");
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
      tags,
    } = req.body;

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({
        status: 404,
        success: false,
        message: "This project not found.",
      });
    }

    const tag = tags?.toLowerCase()?.split(",");

    const project = await Project.findById({ _id: userId });
    console.log(project);
    project.title = title || project.title;
    project.details = details || project.details;
    project.category = category || project.category;
    project.author = author || project.author;
    project.liveLink = liveLink || project.liveLink;
    project.sourceCode = sourceCode || project.sourceCode;
    project.image = image || project.image;
    project.avatar = avatar || project.avatar;
    project.tags = tag || project.tags;

    await project.save();

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProjectController;
