const Project = require("../../models/project.model");
const errorMessageTemplates = require("../../utils/errorMessage");

const createProjectController = async (req, res, next) => {
  try {
    const {
      title,
      details,
      category,
      author,
      liveLink,
      sourceCode,
      image,
      avatar,
    } = req.body;
    if ((!title, !details, !category, !author, !sourceCode, !image, !avatar)) {
      return res.send(
        errorMessageTemplates("Please fill all required fields.")
      );
    }

    const project = new Project({
      title,
      details,
      category,
      author,
      liveLink,
      sourceCode,
      image,
      avatar,
    });
    console.log(project);
    await project.save();
    res.status(201).redirect("/");
  } catch (error) {
    next(error);
  }
};

module.exports = createProjectController;
