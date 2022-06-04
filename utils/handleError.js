const handleHttpError = (res, message = "algo sucedio", code = 403) => {
  console.log("Error", message);
  res.status(code);
  res.send({ error: message });
};

module.exports = { handleHttpError };
