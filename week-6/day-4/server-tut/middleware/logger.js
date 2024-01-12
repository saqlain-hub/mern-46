const date = new Date();

const logger = (req, res, next) => {
  console.log(
    `URL: ${req.protocol}://${req.get("host")}${
      req.originalUrl
    }\nDate: ${date.getFullYear()} / ${
      date.getMonth() + 1
    } / ${date.getDate()}\nTime: ${
      date.getHours() - 12
    }:${date.getMinutes()}:${date.getSeconds()}`
  );
  next();
};

module.exports = logger;
