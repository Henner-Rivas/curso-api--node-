const { handleHttpError } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role;
    const checkValueRol = roles.some((rol) => rolesByUser.includes(rol));
    if (!checkValueRol) {
      handleHttpError(res, "USER NOT PERMISSIONS");
      return;
    }

    next();
  } catch (error) {
    handleHttpError();
  }
};

module.exports = checkRol;
