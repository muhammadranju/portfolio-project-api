const settingPageGetController = async (req, res, next) => {
  try {
    return res.status(200).render("pages/setting.ejs", {
      title: "Setting Page",
      isAuth: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { settingPageGetController };
