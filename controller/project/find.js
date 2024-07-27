const Project = require("../../models/project.model");
const findProjectController = async (req, res, next) => {
  try {
    const projects = await Project.find();
    return res.status(200).render("project.ejs", {
      title: "Project Page",
      isAuth: req.isAuth,
      projects,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = findProjectController;
