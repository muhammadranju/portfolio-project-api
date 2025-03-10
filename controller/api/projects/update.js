const Project = require("../../../models/project.model");
const mongoose = require("mongoose");
const updateProjectController = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const {
      title,
      details,
      category,
      author,
      liveLink,
      sourceCode,
      backendSourceCode,
      image,
      avatar,
      tags,
      longDetails,
    } = req.body;

    console.log(tags);

    if (!mongoose.isValidObjectId(productId)) {
      return res.status(400).json({
        status: 404,
        success: false,
        message: "This project not found.",
      });
    }

    const project = await Project.findById({ _id: productId });
    project.title = title || project.title;
    project.details = details || project.details;
    project.longDetails = longDetails || project.longDetails;
    project.category = category || project.category;
    project.author = author || project.author;
    project.backendSourceCode = backendSourceCode || project.backendSourceCode;
    project.liveLink = liveLink || project.liveLink;
    project.sourceCode = sourceCode || project.sourceCode;
    project.image = image || project.image;
    project.avatar = avatar || project.avatar;
    project.tags = tags || project.tags;

    console.log(project);
    await project.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProjectController;
