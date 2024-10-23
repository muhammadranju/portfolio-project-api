const contactPageGetController = async (req, res, next) => {
  try {
    return res.status(200).render("pages/contact.ejs", {
      title: "Contact Page",
      isAuth: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { contactPageGetController };
