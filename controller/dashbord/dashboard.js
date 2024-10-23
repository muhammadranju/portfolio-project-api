const dashboardPageGetController = async (req, res, next) => {
  try {
    return res.status(200).render("pages/dashboard.ejs", {
      title: "Dashboard Page",
      isAuth: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { dashboardPageGetController };
