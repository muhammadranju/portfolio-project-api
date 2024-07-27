const homeController = async (req, res, next) => {
  try {
    return res
      .status(200)
      .render("index.ejs", { title: "Project Home Page", isAuth: req.isAuth });
  } catch (error) {
    next(error);
  }
};

module.exports = homeController;
