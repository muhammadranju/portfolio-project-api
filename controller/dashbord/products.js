const Project = require("../../models/project.model");

const productsPageGetController = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    console.log(projects);
    return res.status(200).render("pages/products.ejs", {
      title: "Products Page",
      isAuth: true,
      projects,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { productsPageGetController };
