const Project = require("../../../models/project.model");
const mongoose = require("mongoose");

const findSingleProjectController = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (!mongoose.isValidObjectId(productId)) {
      return res.status(400).json({
        status: 404,
        success: false,
        message: "This project not found.",
      });
    }

    const project = await Project.findById({ _id: productId });
    return res.status(200).json({
      status: 200,
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findSingleProjectController;
