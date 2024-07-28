const Project = require("../../models/project.model");
const mongoose = require("mongoose");

const findSingleProjectController = async (req, res, next) => {
  try {
    const { productId } = req.params;

    if (!mongoose.isValidObjectId(productId)) {
      return res.status(400).json({
        error: 404,
        message: "This project not found.",
      });
    }

    const project = await Project.findById({ _id: productId });

    return res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = findSingleProjectController;
