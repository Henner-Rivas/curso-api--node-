const handleHttpError = (res, mensage = "algo sucedio", code = 403) => {
  res.status(code);
  res.status({ err: mensage });
};

module.exports = { handleHttpError };
