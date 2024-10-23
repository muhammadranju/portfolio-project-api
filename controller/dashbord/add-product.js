const addProjectPageGetController = async (req, res, next) => {
  try {
    return res.status(200).render("pages/add-product.ejs", {
      title: "Add Project Page",
      isAuth: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addProjectPageGetController };
