const aboutPageGetController = async (req, res, next) => {
  try {
    return res.status(200).render("pages/about.ejs", {
      title: "About Me Page",
      isAuth: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { aboutPageGetController };
